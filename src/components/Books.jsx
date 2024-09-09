import React from 'react'
import './books.css';
import style from '../global.module.css';
import { useCount } from './hooks/useCount';

const Books = () => {
  let {c,decreaseC,increaseC} = useCount(10);
  return (
    <div id='Books' >
        <h1>Books</h1>
        <p className={style.p} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, voluptatibus excepturi sunt amet, dolores necessitatibus nisi sit eius nulla sapiente minus cumque.</p>
        <h3 className={style.h3} >Heading 3</h3>
        <p className={style.p2} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor facere!</p>

        <h3> C: {c} </h3>
        <button onClick={increaseC}>c++</button>
        <button onClick={decreaseC}>c--</button>
    </div>
  )
}

export default Books