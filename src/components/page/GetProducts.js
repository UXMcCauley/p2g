import React, { useContext } from 'react';
import { Products } from 'contexts/index'; // import classes
import { ProductCard } from 'components/index';
import { Container, Row, Col } from 'react-bootstrap';

const GetProducts = (props) => {

  const products = useContext(Products);
  const type = props.type;

  return (
    <Container>
      <Row>
        {products.products[0][type].map( (p, i) => (
            <Col key={p.id} lg={3} md={6} sm={12} xs={12}>
              <ProductCard title={p.title} cost={p.cost} img={p.img}/>
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default GetProducts;
