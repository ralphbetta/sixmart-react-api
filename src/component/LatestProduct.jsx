import React from 'react'

const LatestProduct = () => {
  return (
    <div>
        <u className='flex list-none no-underline gap-3 justify-center'>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>All</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Men's Clothing</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Women's Clothing</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Jewelery</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Eclectronic</li>
        </u>
    </div>
  )
}

export default LatestProduct