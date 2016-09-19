const WEB_PAY_SUPPORTED = window.PaymentRequest ? true : false;

// Supported payment methods
const supportedInstruments = [{
  supportedMethods: [
    'visa', 'mastercard', 'amex', 'discover'
  ]
}];

// Checkout details
const details = {
  displayItems: [{
    label: 'Original donation amount',
    amount: { currency: 'GBP', value: '65.00' }
  }], 
  total: {
    label: 'Total due',
    amount: { currency: 'GBP', value : '65.00' }
  }
};

//required details
const OPTIONS = {
  requestShipping: true,
  requestPayerPhone: true,
  requestPayerEmail: true
};


/**
 * createShippingOption
 * 
 * @description factory method for a shipping option object
 */
const createShippingOption = ( id, label, amount, selected = false ) => {
  return {
    id,
    label,
    amount: {currency: 'GBP', value: amount},
    selected: true
  }
}

/**
 * createShippingOptions
 * 
 * @description returns an array of shipping options 
 * note: These methods would usually be returned from the server
 */
const createShippingOptions = ( ) => {
  let shippingOptions = [];
  shippingOptions.push(createShippingOption('123456', 'Standard Delivery', 3.99));
  shippingOptions.push(createShippingOption('123456', 'Next Day Delivery', 5.99, true));
}


/**
 * onShippingAddressChange
 * 
 * @description callback from web payment request when shipping address is changed
 */
const onShippingAddressChange = (e) => {
  console.log(e);
  e.updateWith(() => {
    let shippinOptions = createShippingOptions();
    details.shippinOptions = shippinOptions;
    console.log(details);
    return Promise.resolve(details);
  });
};

/**
 * onShippingOptionChange
 * 
 * @description callback from web payment request when shipping options is changed
 */
const onShippingOptionChange = (e) => {
  e.updateWith(createShippingOptions());
};


/**
 * startWebPay
 */
export function startWebPay(supportedCards, lines = details, options = OPTIONS){
  alert(WEB_PAY_SUPPORTED);
  if(!WEB_PAY_SUPPORTED) return;
    console.log(supportedInstruments);
    console.log(lines);
    console.log(options);
   let request = new PaymentRequest(supportedInstruments, lines, OPTIONS);
   
   // When user enters their address
   request.addEventListener('shippingaddresschange', onShippingAddressChange);
   // When user changes a shipping method
   request.addEventListener('shippingoptionchange', onShippingOptionChange);
   
   request.show()
   .then(result => {
    
      let paymentData = {
        // payment method string
        method: result.methodName,
        // payment details as you requested
        details: result.details,
        // shipping address information
        address: result.shippingAddress,
        // shipping option
        shippingOption: result.shippingOption,
        // buyer's phone number string
        phone: result.payerPhone,
        // buyer's email address string
        email: result.payerEmail
      };
    
      // POST the payment information to the server
      return fetch('/pay', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        // Examine server response
        if (response.status === 200) {
          // Payment successful
          return result.complete('success');
        } else {
          // Payment failure
          return result.complete('fail');
        }
      }).catch(() => {
        return result.complete('fail');
      });
    });
    
}
