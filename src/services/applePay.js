export const APPLE_PAY_SUPPORTED = window.ApplePaySession ? true : false;
export const MERCHANT_IDENTIFIER = 'example.com.store';

export function canMakePaymentsWithActiveCard(){
  if (APPLE_PAY_SUPPORTED) {
    var promise = window.ApplePaySession.canMakePaymentsWithActiveCard(MERCHANT_IDENTIFIER);
    return promise;
  } else {
    return Promise.resolve(false);
  }
}


export function startApplePaySession(){
  console.log('start');
}
