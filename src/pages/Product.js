import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from "../component/Navbar";

const image = "https://picsum.photos/200"

const Product = () => {

    const {id} =useParams();
    const [product, setProduct] = useState([]);
    const [loading, setloading] = useState(false);

    const url1 = "https://fakestoreapi.com/products";

    useEffect(() => {

        const getProduct = async () => {
            setloading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);   
            setProduct(await response.json())  
            setloading(false)      
        }
         
        getProduct()
    }, []);

    console.log(product)

    return (
        <div>
            <Navbar/> 
            
            <div className=" grid sm:grid-cols-2 mx-[5%] mt-10">
                <div className=" px-40 flex justify-center items-center">
                <img src={ product.image} className=' h-full' />
                </div>
                <div>
                    <h3 className=" uppercase text-[15px] text-gray-400 font-semibold">{product.category} </h3>
                    <div className="text-[25px] text-gray-500 font-normal">{product.title}</div>
                    <p className=" font-bold text-[15px]">Rating {product.rating && product.rating.rate}</p>
                    <div className="mt-3 font-bold text-[25px]">$ {product.price}</div>
                    <p className=" text-gray-500">{product.description}</p>
                    <div className="flex gap-5 mt-5">
                    <button className='border-[1.5px] border-gray-500 px-3 py-1 mb-4 rounded-sm text-gray-500 bg-black hover:bg-gray-500 hover:text-white cursor-pointer'>Add to Cart</button>
                    <button className='border-[1.5px] border-gray-500 px-3 py-1 mb-4 rounded-sm text-gray-500 bg-black hover:bg-gray-500 hover:text-white cursor-pointer'>Go to cart</button>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Product