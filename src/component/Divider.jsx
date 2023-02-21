import React from 'react'

const Divider = ({title}) => {

  return (
    <div className='bg-white flex justify-center mb-10 border-b-[1.5px] mx-[10%] mt-10'>
        <h3 className= 'font-bold text-2xl mb-2'>{title}</h3>
    </div>
  )

}

export default Divider