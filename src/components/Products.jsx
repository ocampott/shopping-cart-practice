import React from "react";
import styled from "styled-components";

export const Products = ({ addItem, products }) => {
  
  return (
    <div>
      <h3>Products</h3>
      <ProductContainer>
        {products.map((product, index) => {
            return (
                <Product key={index}>
                    <img src={product.img} alt={product.name} />
                    <p className="title">{product.name}</p>
                    <p>{product.author}</p>
                    <p>{product.price}</p>
                    <Button onClick={() => {addItem(product.id, product.name, product.author)}}>
                        Add to cart
                    </Button>
                </Product>
            )
        })}
      </ProductContainer>
    </div>
  );
};

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
  `;

  const Product = styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;

    .title {
        font-weight: bold;
    }

    p {
      margin-bottom: 10px;
    }

    img {
        width: 50%;
        height: 60%;
    }
  `;

  const Button = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: 0.3s ease all;

    &:hover {
      background: #1c6ab9;
    }
  `;
