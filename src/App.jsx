import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basics from './components/Basics'
import Home from './components/Home'
import GreetUser from './components/GreetUser'
import Books from './components/Books'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Practice from './components/tailwind/Practice'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Error from './components/error/Error'
import Details from './components/details/Details'
import Blog from './components/hooks/blog/Blog'
import BlogInfo from './components/hooks/blogInfo/BlogInfo'
import Login from './components/login/Login'
import { Signup } from './components/signup/Signup'
import Parent from './components/parent/Parent'
// js environ
function App() {
  //  js environ
  
  return (
    <>
      <Nav />
      {/* <Parent /> */}
        {/* router step 3 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/basics' element={<Basics />} />
          <Route path='/about' element={<About />} />
          {/* /books/1 */}
          <Route path='/books/:id' element={<Details />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:blog' element={<BlogInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Error />} />
        </Routes>
      <Footer />
    </>
  )
}
// js environ
export default App
