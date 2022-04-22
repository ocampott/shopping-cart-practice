import React from 'react';
import styled from 'styled-components';

export const ShoppingCart = ({ cart }) => {

  return (
    <div>
        <h3>Shopping cart</h3>
        {cart.length > 0 ? 
            cart.map((item, index) => {
                return (
                    <Item key={index}>
                        <ItemName>{item.name}</ItemName>
                        <p>{item.author}</p>
                        <p>Quantity:{item.quantity}</p>
                    </Item>
                )
            }) :
            <p>No books in the cart</p>
        }
    </div>
  )
}

const Item = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

const ItemName = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`
