import React from "react";

import { Navbar } from "../component/Navbar";

const image = "https://picsum.photos/200"

function Product() {
    return (
        <div>
            <Navbar/> 
            <div className=" grid grid-cols-2 mx-[5%] mt-10">
                <div className=" px-4 flex justify-center items-center">
                <img src={image} className=' h-full' />
                </div>
                <div>
                    <h3 className=" uppercase text-[15px] text-gray-400 font-semibold">Men's Clothing </h3>
                    <div className="text-[25px] text-gray-500 font-normal">Mens casual premium slick fit T-Shirts</div>
                    <p className=" font-bold text-[15px]">Rating 4.1</p>
                    <div className="mt-3 font-bold text-[25px]">$22.3</div>
                    <p className=" text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    <div className="flex gap-5 mt-5">
                    <button className='border-[1.5px] border-gray-500 px-3 py-1 mb-4 rounded-sm text-gray-500 bg-black hover:bg-gray-500 hover:text-white cursor-pointer'>Add to Cart</button>
                    <button className='border-[1.5px] border-gray-500 px-3 py-1 mb-4 rounded-sm text-gray-500 bg-black hover:bg-gray-500 hover:text-white cursor-pointer'>Go to cart</button>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Product;