import React, { useContext } from 'react';
import { Customer } from 'contexts/index';
import { Table, Col } from 'react-bootstrap';

const Personal = () => {
  const customerContext = useContext(Customer)
  // const dateFormat = {month: 'long', day: '2-digit', year: 'numeric'};

  return (
    <Col sm={12}>
      <Table borderless hover size="sm">
        <thead>
        <tr>
          <th colSpan="4">
            <span style={{ textTransform: 'uppercase', fontWeight: 500, display: 'block', paddingLeft: 8, borderLeft: '4px solid purple'}}>Personal Details</span>
          </th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {Object.keys(customerContext.customerData.data.personalDetails).map(key => {
              return <tr key={key}>
                <td colSpan="1">{key}:</td>
                <td>{ customerContext.customerData.data.personalDetails[key] }</td>
              </tr>
          })}
        </tbody>
      </Table>
    </Col>
  )
}

export default Personal;
