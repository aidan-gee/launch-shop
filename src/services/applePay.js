export const APPLE_PAY_SUPPORTED = window.ApplePaySession ? true : false;
export const MERCHANT_IDENTIFIER = 'example.com.store';
const API_VERSION = 1;

const createPaymentRequest = () => {
  return {
    countryCode: 'GB',
    currencyCode: 'GBP',
    supportedNetworks: ['visa', 'mastercard', 'amex', 'discover'],
    merchantCapabilities: ['supports3DS'],
    total: { label: 'Launch', amount: '10.00' },
  }
}

const createLineItem = (label, amount) => {
  return {
    type: "final", 
    label, 
    amount
  }
}

const validateMerchantSession = function(e){
  // make http request to get session token
  let data = {};
  this.completeMerchantValidation(data);
}

const shippingContactSelected = function(e){
  
  let data = {
    "shippingMethods": [
        {
            "label": "UK Standard",
            "detail": "Delivered within 3 - 5 days.",
            "amount": "3.99",
            "identifier": "123456781"
        },
        {
            "label": "Next Day",
            "detail": "Next day delivered tomorrow. ",
            "amount": "4.99",
            "identifier": "123456782"
        },
        {
            "label": "Next Day Evening Delivery",
            "detail": "Order before 11pm for delivery tomorrow evening.",
            "amount": "7.99",
            "identifier": "123456783"
        }
    ],
    "label": "Launch",
    "total": "13.99"
  };
  let lineItem = createLineItem(data.label, data.total);
  // here we have some user details like a partial postal code, country and countryCode
  // we can use this to get delivery method for the session
  this.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS, data.shippingMethods, lineItem, []);
  
}

const shippingMethodSelected = function(e){
  let lineItem = createLineItem('Launch', '13.99');
  this.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS, lineItem, []);
}

const paymentMethodSelected = function(e){
  let lineItem = createLineItem('Launch', '13.99');
  this.completePaymentMethodSelection(lineItem, []);
}

const authorizePayment = function(e){
  // call API to make payment 
  // if success
  this.completePayment(ApplePaySession.STATUS_SUCCESS);
}

const cancelApplePaySession = function(e){
  this.abort();
}





export function canMakePaymentsWithActiveCard(){
  if (APPLE_PAY_SUPPORTED) {
    var promise = window.ApplePaySession.canMakePaymentsWithActiveCard(MERCHANT_IDENTIFIER);
    return promise;
  } else {
    return Promise.resolve(false);
  }
}


export function startApplePaySession(){
  
  let paymentRequest = createPaymentRequest();
  let session = new window.ApplePaySession(API_VERSION, paymentRequest);
  
  session.onvalidatemerchant = validateMerchantSession;
  session.onshippingcontactselected = shippingContactSelected;
  session.onshippingmethodselected = shippingMethodSelected;
  session.onpaymentmethodselected = paymentMethodSelected;
  session.onpaymentauthorized = authorizePayment;
  session.oncancel = cancelApplePaySession;
  
  // Open the apple pay payment form
  session.begin();

}
