class PayPal {
    pay(amount) {
        return `Paiement PayPal : ${amount} €`;
    }
}
class Stripe {
    makePayment(amount) {
        return `Paiement Stripe : ${amount} €`;
    }
}


function processPayment(paymentMethod, amount) {
    console.log(paymentMethod.payer(amount));
}

class PayPalAdapter {
    constructor(paypal) {
        this.paypal = paypal;
    }

    payer(amount) {
        return this.paypal.pay(amount);
    }

}

class StripeAdapter {
    constructor(stripe) {
        this.stripe = stripe;
    }

    payer(amount) {
        return this.stripe.makePayment(amount);
    }

}

processPayment(new PayPalAdapter(new PayPal()), 55);
processPayment(new StripeAdapter(new Stripe()), 15);

