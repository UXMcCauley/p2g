import React, { Fragment, useContext } from 'react';
import { Cart, UIContext } from 'contexts/index';
import { SetDateSlider } from 'components/index';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {

  const cart = useContext(Cart);
  const uiContext = useContext(UIContext)
  const qtySpan = ( value ) => { return ( <span className="bagCount">{ value ? value.length : 0 }</span> ) }

  return (
    <Fragment>
      <Navbar bg="light" fixed="top">
        <Container className="noMargin">
          <Navbar.Brand color="light" href="#home">Parties 2 Go</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item onClick={ () => { uiContext.toggleCart() }} style={{ paddingRight: 20, position: 'relative'}}>{qtySpan(cart.cart)}
              <img alt="shopping bag" src="/img/shopping-bag.svg"/>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <SetDateSlider/>
    </Fragment>
  )
}

export default Header;
