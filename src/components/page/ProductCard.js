import React, { useContext } from 'react';
import { Cart } from 'contexts/index';
import { Card, Button } from 'react-bootstrap';

const ProductCard = (props) => {

  const { addToCart } = useContext(Cart);

  return (
    <Card>
      <div className="cardImage" style={{ backgroundImage: 'url(' +props.img+ ')' }}></div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Only ${props.cost}</Card.Subtitle>
        <Card.Text>{ props.desc }</Card.Text>
        <Button variant="primary" onClick={ () => { addToCart([Math.floor(Math.random() * (1000000 - 0 + 1)) + 0, props.title, props.cost])} }>Click</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;
