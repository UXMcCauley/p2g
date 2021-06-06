import React, { useContext } from 'react';
import { UIContext, Customer } from 'contexts/index';
import { Rentals, EventInfo, Personal, PaymentForm } from 'components/index';
import { Row, Col, Button } from 'react-bootstrap';

const CartPanel = () => {
  const uiContext = useContext(UIContext)
  const customerContext = useContext(Customer)
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: 'keyYCtVdqu5KWRkCr'}).base('appivdEtitFmctf1j');

  const addRecord = () => {
    const eventDate = new Date(customerContext.customerData.data.eventDetails.Date)
    // console.log(eventDate.toISOString());
    base('Rentals').create([
      {
        "fields": {
          "firstName": customerContext.customerData.data.personalDetails.First,
          "lastName": customerContext.customerData.data.personalDetails.Last,
          "eventDate": eventDate.toISOString(),
          "email": customerContext.customerData.data.personalDetails.Email,
          "phone": customerContext.customerData.data.personalDetails.Phone,
          "address": customerContext.customerData.data.personalDetails.Address,
          "city": customerContext.customerData.data.personalDetails.City,
          "state": customerContext.customerData.data.personalDetails.State,
          "zip": customerContext.customerData.data.personalDetails.Zip
        }
      }
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
  }

  return (
    <div onClick={()=>{uiContext.toggleCart()}} className={`cart ${ uiContext.cartState ? ' open' : '' }`}>
      <div onClick={(e)=>{e.stopPropagation()}} className="container cartInner">
        <Row>
          <PaymentForm/>
          <Rentals/>
        </Row>
        <Row>
          <EventInfo/>
        </Row>
        <Row>
          <Personal/>
        </Row>
        <Row>
          <Col>
          <Button onClick={()=> {addRecord()}}>Comlete Booking</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CartPanel;
