import React from 'react';
import { Client, Environment } from 'square'

const PaymentForm = () => {
  const tryItNow = async () => {
    const client = new Client({
      environment: Environment.Sandbox,
      accessToken: process.env.REACT_APP_SQUARE_ACCESS_TOKEN,
    })
    // const paymentsApi = client.paymentsApi;
    const bodyAmountMoney: Money = {};
    bodyAmountMoney.amount = 200;
    bodyAmountMoney.currency = 'USD';
    try {
      const response = await client.paymentsApi.createPayment({
        sourceId: 'cnon:card-nonce-ok',
        idempotencyKey: 'feed35df-7f7b-4466-b002-3a1fb1e40fc5',
        amountMoney: {
          amount: 50,
          currency: 'USD'
        }
      });

      console.log(response.result);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form id="payment-form">
        <div id="card-container"></div>
        <button onClick={() => {tryItNow()}} id="card-button" type="button">Pay $1.00</button>
      </form>
      <div id="payment-status-container"></div>
    </div>
  )
}

export default PaymentForm;
