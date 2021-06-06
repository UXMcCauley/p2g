import React from 'react';
// import CustomerInfo from './index';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomeHero = (props) => {

  return (
    <Container>
      <Row>
        <Col lg={8} sm={12}>
          <Card>
            <Card.Body className="homeHero">
              <div>Milwaukee's favorite place to rent bounce houses!</div>
              <div>For the safety of your family and guests, Parties 2 Go sanitizes all of our bounce houses, slides, chairs, and tables before and after each use.</div>
            </Card.Body>
          </Card>
        </Col>
        {/*<CustomerInfo/>*/}
      </Row>
    </Container>
  )
}

export default HomeHero;
