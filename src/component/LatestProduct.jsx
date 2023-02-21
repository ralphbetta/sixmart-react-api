import React from 'react'

const image = "https://picsum.photos/200/300"

const LatestProduct = () => {
  return (
    <div className='mt-8'>
        <u className='flex list-none no-underline gap-3 justify-center mb-10'>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>All</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Men's Clothing</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Women's Clothing</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Jewelery</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Eclectronic</li>
        </u>

        <div className=" w-full grid md:grid-cols-4 sm:grid-cols-2 gap-5 px-[5%]">
            
       {newFunction()}
       {newFunction()}
       {newFunction()}
       {newFunction()}
       {newFunction()}
       {newFunction()}
       {newFunction()}
       {newFunction()}
        </div>
    </div>
  )
}

export default LatestProduct

function newFunction() {
    return <div className=" shadow-md p-2 rounded-md border-2 border-gray-100 items-center justify-center flex flex-col">
        <div className=" overflow-hidden bg-red-500 sm:h-80 w-full rounded-lg">
            <img src={image} alt="" className=' w-full' />
        </div>
        <h4 className='py-2'>Random Title</h4>
        <h4 className=' font-semibold mb-2'>$190.99</h4>
        <button className='border-[1.5px] border-gray-500 px-2 mb-4 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Buy Now</button>
    </div>
}
