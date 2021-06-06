import React, { useContext } from 'react';
import { Cart } from 'contexts/index';
import { Table, Col } from 'react-bootstrap';

const Rentals = () => {
  const cartInstance = useContext(Cart)
  const cartTotal = cartInstance.cart.reduce((a, v) => a = a + v[2], 0)
  return (
    <Col sm={12}>
      <Table borderless hover size="sm">
        <thead>
        <tr>
          <th><span style={{ textTransform: 'uppercase', fontWeight: 500, display: 'block', paddingLeft: 8, borderLeft: '4px solid purple'}}>Rentals</span></th>
        </tr>
        </thead>
        <tbody>
        {cartInstance.cart.map((key, i) => {
          return <tr key={cartInstance.cart[i][0]}>
                    <td>{cartInstance.cart[i][1]}</td>
                    <td>${cartInstance.cart[i][2]}</td>
                    <td><img onClick={()=>{cartInstance.removeFromCart(i)}} src="img/trash-2.svg" alt="remove this item from the cart"/></td>
                  </tr>
        })}
        <tr>
          <td><strong>Total:</strong></td>

          <td>${cartTotal}</td>
        </tr>
        </tbody>
      </Table>
    </Col>
  )
}

export default Rentals;
