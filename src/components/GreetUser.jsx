import React from 'react'

const GreetUser = ({name,title}) => {
    function handleClick() {
        alert('You Clicked Me!')
    }
  return (
    <div>
        <h3 style={{color: 'white',backgroundColor: 'black',padding:'1rem 2rem',marginBottom: '1rem'}} onClick={handleClick} >Good Morning {title?title: 'Mr.'} {name? name: 'Chile'} </h3>
    </div>
  )
}

export default GreetUser