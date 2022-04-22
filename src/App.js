import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Store } from './components/Store';
import { Error404 } from './components/Error404';
import { ShoppingCart } from './components/ShoppingCart';
import Kings from './assets/the-way-of-kings.jpg'
import Carrie from './assets/carrie.jpg'
import AnotherLife from './assets/maybe-in-another-life.jpg'
import Azkaban from './assets/azkaban.jpg'

function App() {

  const products = [
    { id: 1, name: "The way of kings", author: "Brandon Sanderson", price: "$55", img:  Kings },
    { id: 2, name: "Carrie", author: "Stephen King", price: "$20",  img:  Carrie },
    { id: 3, name: "Maybe in another life", author: "Taylor Jenkins Reid", price: "$50", img: AnotherLife },
    { id: 4, name: "Harry Potter (Book 3)", author: "JK. Rowling", price: "$25", img:  Azkaban },
  ];

  const [cart, setCart] = useState([]);

  const addItem = (productID, name, author) => {
    if(cart.length === 0){
        setCart([{id: productID, name: name, author: author, quantity: 1}]);
    } else {
        const newCart = [...cart];
        const inCart = newCart.filter((item) => {
            return item.id === productID
        }).length > 0;
        if(inCart){
            newCart.forEach((item, index) => {
                if(item.id === productID){
                    const quantity = newCart[index].quantity;
                    newCart[index] = {
                        id: productID, 
                        name: name, 
                        author: author,
                        quantity: quantity + 1
                    }
                }
            });
        } else {
            newCart.push(
                {
                    id: productID,
                    name: name,
                    author: author,
                    quantity: 1
                }
            );
        }
        setCart(newCart);
    }
}

  return (
    <Container>
      <Menu>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about-us'>About us</NavLink>
        <NavLink to='/store'>Store</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/store' element={<Store addItem={ addItem } products={ products }/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </main>
      <aside>
        <ShoppingCart cart={cart}/>
      </aside>
    </Container>
  );
}

const Container = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
