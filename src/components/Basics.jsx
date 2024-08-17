import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
const Basics = () => {
    let num = 12;
    let name = 'Chile';
  return (
    <div>
          <h1>Welcome to REact world</h1>
      <img src={viteLogo} alt="logo" />
      <img src={reactLogo} alt="logo" />
      <p>Lorem ipsum dolor sit amet.</p>
      <p>My Name is {num> 20? name: 'Amadi Chile'} </p>
      <p className='para1' > REact is {5+5} times faster with vite </p>
    </div>
  )
}

export default Basics