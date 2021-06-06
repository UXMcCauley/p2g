import React, { useContext } from 'react';
import { Customer } from 'contexts/index';
import { Table, Col } from 'react-bootstrap';

const EventInfo = () => {
  const customerContext = useContext(Customer)
  // const dateFormat = {month: 'long', day: '2-digit', year: 'numeric'};

  return (
    <Col sm={12}>
      <Table borderless hover size="sm">
        <thead>
        <tr>
          <th colSpan="4">
            <span style={{ textTransform: 'uppercase', fontWeight: 500, display: 'block', paddingLeft: 8, borderLeft: '4px solid purple'}}>Event Details</span>
          </th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {Object.keys(customerContext.customerData.data.eventDetails).map(key => {
              return <tr key={key}>
                <td>{key}:</td>
                <td colSpan="3">{ customerContext.customerData.data.eventDetails[key] }</td>
                <td></td>
                <td></td>
              </tr>
          })}
        </tbody>
      </Table>
    </Col>
  )
}

export default EventInfo;
