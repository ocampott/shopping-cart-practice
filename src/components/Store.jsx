import React from 'react'
import { Products } from './Products'

export const Store = ({ addItem, products }) => {
  return (
    <div>
      <h1>Store</h1>
      <Products products={ products } addItem={ addItem }/>
    </div>
  )
}
