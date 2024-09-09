import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    let redir = useNavigate();
  return (
    <div className=' flex items-center flex-col justify-center h-[80vh] ' >
        <h2 className='text-red-500'>Oops! Entered route not fond </h2>
        <button onClick={()=> redir('/')} >Go Back</button>
    </div>
  )
}

export default Error