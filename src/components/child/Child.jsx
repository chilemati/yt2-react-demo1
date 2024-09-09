import React from 'react'

const Child = ({MaxPrice}) => {
    let userMax = MaxPrice([3,5,9]);
    console.count('Child rendered: ')
  return (
    <div>
        <h2>Child</h2>
        <hr />
        <h3> MaxPrice: {userMax}  </h3>
    </div>
  )
}

export default React.memo(Child)