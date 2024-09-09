import React, { useState, useTransition } from 'react'

export const useCount = (count) => {
    let [c,setC] = useState(count);
    let [isPending,setIsPending] = useTransition()
    function increaseC () {
        setIsPending(()=> {
          setTimeout(() => {
            console.log(isPending)
            setC(prev=> prev+1)
          }, 5000);
        })
      }
      function decreaseC () {

        setC(prev=> prev-1)
      }
  return {
     c: c,
     increaseC,
     decreaseC,
     isPending
  }
}

