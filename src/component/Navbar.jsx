import React from 'react'

import {
    AiOutlineLogin,
    AiOutlineUserAdd,
    AiOutlineShoppingCart
} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-5 py-5 bg-white shadow-md'>
        <h3 className=" font-bold uppercase text-xl">SixMart</h3>

        <ul className='hidden sm:flex gap-5 '>
            <li><NavLink to="/" className=" text-gray-600 font-normal">Home</NavLink></li>
            <li><NavLink to="/products" className=" text-gray-600 font-normal">Products</NavLink></li>
            <li><NavLink to="" className=" text-gray-600 font-normal">About</NavLink></li>
            <li><NavLink to="" className=" text-gray-600 font-normal">Contact</NavLink></li>
        </ul>

        <div className="flex gap-2">
            <button className=' border-solid border-[1.2px] border-gray-400 px-2 py-[2px] rounded-sm flex items-center justify-center'><AiOutlineLogin className='mr-2 text-[14px]'/>Login</button>
            <button className=' border-solid border-[1.2px] border-gray-400 px-2 py-[2px] rounded-sm flex items-center justify-center'><AiOutlineUserAdd className='mr-2 text-[14px]'/>Register</button>
            <button className=' border-solid border-[1.2px] border-gray-400 px-2 py-[2px] rounded-sm flex items-center justify-center'><AiOutlineShoppingCart className='mr-2 text-[14px]'/>Cart(0)</button>
        </div>        
    </div>
  )
}
