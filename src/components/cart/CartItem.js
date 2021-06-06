import React, { useContext } from 'react';
import { Customer } from 'contexts/index';

const CartItem = (props) => {
  const customer = useContext(Customer)
  return (
    <tr>
      <td>
      { customer.customerData[props.value] }
      </td>
    </tr>
  )
}

export default CartItem;
