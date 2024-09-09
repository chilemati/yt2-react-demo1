import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../atoms/cart'

/* 
  router step 4
  > replace a tag with Link tag
  > replace href with to
*/
const Nav = () => {
    let cart = useRecoilValue(cartAtom);
  return (
  <nav className='bg-black py-3 px-4 w-full ' >
    <ol className='flex items-center flex-wrap gap-5 justify-between'>
        <li>
            <Link className='text-white' to="/">Logo</Link>
        </li>
        <li className='flex items-center justify-between flex-wrap gap-2'>
            <Link className='text-white' to="/blog">Blog</Link>
            <Link className='text-white' to="/books">Books</Link>
            <Link className='text-white' to="/basics">Basics</Link>
            <Link className='text-white' to="/about">About</Link>
            <Link className='text-white' to="/login">Login</Link>
            <Link className='text-white' to="/signup">Signup</Link>
            <Link className='text-white' to="#"> Cart [{cart}] </Link>
        </li>
    </ol>
  </nav>
  )
}

export default Nav