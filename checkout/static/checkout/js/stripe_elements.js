/*
    Core logic/payment flow for this comes from here:
    https://stripe.com/docs/payments/accept-a-payment
    
    CSS from here:
    https://stripe.com/docs/js/appendix/style 
     and modified with info copied from ckz8780
*/

var stripe_public_key = $('#id_stripe_public_key').text().slice(1, -1);
var client_secret = $('#id_client_secret').text().slice(1, -1)
var stripe = Stripe(stripe_public_key);
var elements = stripe.elements();

var style = {
    base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
            color: '#fce883',
        },
        '::placeholder': {
            color: '#87BBFD',
        },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
    },
};

var card = elements.create('card', {style: style});
card.mount('#card-element');