import React, { useContext } from 'react';
import { UIContext, Customer } from 'contexts/index'; // import classes
import { Form, Row, Col } from 'react-bootstrap';

const EventDateInput = (props) => {

  const customerContext = useContext(Customer)
  const uiContext = useContext(UIContext)

  return (
    <Row className="d-flex justify-content-center">
      <Col lg={4}>
        <Form>
          <Form.Control
            type="date"
            value={customerContext.eventDate}
            onChange={(event) => {
              customerContext.updateCustomerData('eventDetails', 'Date',  event.target.value)
              uiContext.toggleSlider()
              }
            }
          />
        </Form>
      </Col>
    </Row>
  )
}

export default EventDateInput;
