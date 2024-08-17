import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basics from './components/Basics'
import Home from './components/Home'
import GreetUser from './components/GreetUser'
import Books from './components/Books'
// js environ
function App() {
  //  js environ
 

  function Car() {
    return (
      <h2>This is my Car</h2>
    )
  }
  
  
  return (
    <>
    {/* jsx environ */}
     <Home />
       <Basics />
       <Books />
      {/* calling or using Car component */}
      <Car />
      <GreetUser name='Jack' title='Mr.' />
      <GreetUser name='Gift' title='Mrs.'  />
      <GreetUser name='Mary' title='Miss.' />
      <GreetUser name='John'  />
    </>
  )
}
// js environ
export default App
