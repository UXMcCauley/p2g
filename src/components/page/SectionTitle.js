import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SectionTitle = (props) => {

  const data = useState({
    seatingAndGenerators: {
      title: 'Seating & Generators',
      content: "Having your event at a park or public space? Don't forget about these useful add-ons."
    }
  })

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header className="sectionTitle">
              <h1>{data[0].seatingAndGenerators.title}</h1>
            </Card.Header>
            <Card.Body>
              <p>{data[0].seatingAndGenerators.content}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionTitle;
