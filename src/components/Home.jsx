import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import { useRecoilState } from 'recoil';
import { cartAtom } from './atoms/cart';
import { useCount } from './hooks/useCount';
import Basics from './Basics';
import GreetUser from './GreetUser';
import Login from './login/Login';
const Home = () => {
    /* 
    let [count,setCount] = useState(0)
    count is a variable whose initial value is 0
    setCount is a function useState gives you to update count when you want
    0 is the iniatial value of count
   */
    let [name,setName] = useState('Amadi Chile');
    let [cart,setCart] = useRecoilState(cartAtom);
    let {c,decreaseC,increaseC} = useCount(0);
    let prevC = useRef(0);
  

    useEffect(()=>{
      // alert('Welcome!');
      console.count('Rendered: ')
    },[c])
  return (
    <div id='Home' >
        <h1>HOme page</h1>
        <h2> C : {c} | Name: {name} | prev C: {prevC.current} | Cart: [{cart}] </h2>
        <button onClick={increaseC} className='border border-2 p-2 ' >c+</button>
        <button onClick={decreaseC} className='border border-2 p-2 ' >c-</button>
        <button onClick={()=> setName('John Doe') } className='border border-2 p-2 ' >Updae Name</button>
        <button onClick={()=> setCart(prev=>prev+1) } className='border border-2 p-2 ' >add to cart</button>

        {/*
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          */}
       
    
    </div>
  )
}

export default Home