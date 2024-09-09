import React from 'react'

const Practice = () => {
    // text
    // font size
    // flex
    // color 
  return (
    <div>
        <h2 className='text-red-700 md:text-black lg:text-blue-500 text-center text-[30px]  font-bold ' >Taiwind makes css easy</h2>
        <div className="flex flex-col flex-nowrap md:flex-wrap md:flex-row items-center justify-between border border-2 border-blue-700 h-[50vh] px-4 m-6 bg-gray-100 rounded-[30px]gap-3 ">
            <div className="border border-2 border-red-700 w-full md:w-[300px] h-full md:h-fit  ">one</div>
            <div className="border border-2 border-red-700 w-full md:w-[300px] h-full md:h-fit  ">two</div>
            <div className="border border-2 border-red-700 w-full md:w-[300px] h-full md:h-fit  ">three</div>
            <div className="border border-2 border-red-700 w-full md:w-[300px] h-full md:h-fit  ">four</div>
        </div>
         <p className='text-pri bg-sec font-poppine ' >Lorem ipsum dolor sit.</p>
         <p className='text-green-500 font-edu text-18 ' >Lorem ipsum dolor sit.</p>
    </div>
  )
}

export default Practice