import React from 'react';
import { ApiError, Client, Environment } from 'square'
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const PaymentForm = () => {
  const client = new Client({
    timeout: 3000,
    environment: Environment.Sandbox,
    accessToken: 'EAAAEPDHWPUpzr2tpsfjHW0TGAlm_FiADoNqbLgOB8OwcC6GAcy9nlrVwXiYxacG',
  })

  const takePayment = () => {
    try {
      const response = client.paymentsApi.createPayment({
        sourceId: 'cnon:card-nonce-ok',
        idempotencyKey: uuidv4(),
        amountMoney: {
          amount: 50,
          currency: 'USD'
        },
        autocomplete: true,
        acceptPartialAuthorization: false,
        buyerEmailAddress: 'uxmccauley@gmail.com',
        billingAddress: {
          addressLine1: '8472 County Road T',
          locality: 'Arpin',
          postalCode: '54410',
          country: 'US',
          firstName: 'Drew',
          lastName: 'McCauley'
        },
        note: 'Parties 2 Go rental deposit',
        statementDescriptionIdentifier: 'Parties 2 Go'
      });

      console.log(response.result);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <Button onClick={ ()=> {takePayment()} }>Try Payment</Button>
  )

}

export default PaymentForm;
