import React, { useContext } from 'react';
import { Customer } from 'contexts/index';
import { Table, Col, Card } from 'react-bootstrap';

const CustomerInfo = (props) => {
  const customerContext = useContext(Customer);
  const dateFormat = {month: 'long', day: '2-digit', year: 'numeric'};
  return (
    <Col lg={4} className="d-none d-lg-block">
      <Card>
        <Card.Header className="sectionTitle">
          <h3>Event Date: {customerContext.eventDate ? new Date(customerContext.eventDate).toLocaleDateString('en-US', dateFormat) : 'Pick a date.'}</h3>
        </Card.Header>
        <Card.Body>
          <Table size="sm" borderless>
            <tbody>
              <tr>
                <td>
                  {customerContext.first}
                  {customerContext.phone ? customerContext.phone : 'Pick a date'}
                </td>
              </tr>
              <tr>
                <td>
                  {/*{ customer.customerName.first ? customer.customerName.first : 'Enter your name' }*/}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CustomerInfo;
