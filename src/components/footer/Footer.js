import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Footer = (props) => {
  const listItems = [
    'All rentals are standard 8 hours',
    'All rentals are subject to a $50 non-refundable deposit unless an event is cancelled due to weather.',
    '24-Hour rentals are $300 per bounce house (no discounts applicable).',
    'There are no 24-hour rentals for tables and chairs.',
    'There is an additional $50 fee for same-day delivery.',
    'Standard booking requires 24 hour advanced notice, otherwise it is considered same day.',
    'Wet bounce houses will incur a $50 fee.',
    'Balance of rental due at time of delivery. Cash only.'
  ]
  return (
    <div className="footerContainer">
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <ListGroup>
            <ListGroup.Item active><strong>Rental Information</strong></ListGroup.Item>
            {listItems.map((item, key) => (
              <ListGroup.Item key={key}>{ item }</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <div style={{ padding: 30, textAlign: 'center', color: '#777', fontSize: 12}}>Parties 2 Go&trade; - A Mindful Company. All Rights Reserved 2021</div>
    </Container >
    </div>
  )
}

export default Footer;
