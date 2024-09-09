import React from 'react'
import { useCount } from '../hooks/useCount'
import Child from '../child/Child';

const Parent = () => {
    let {c,increaseC} = useCount(3);
    console.count('Parent rendered: ')
  return (
    <div>
        <h3>Parent</h3>
        <hr />
        <h4> Count: {c} </h4>
        <button className='outline outline-1' onClick={increaseC} >Count++</button>
        <hr />
        <Child />
    </div>
  )
}

export default Parent