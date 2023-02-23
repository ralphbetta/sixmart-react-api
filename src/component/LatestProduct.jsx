import React, {useState, useEffect} from "react";


// import { useNavigate } from 'react-router-dom'

const image = "https://picsum.photos/200/300"

const LatestProduct = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted =  true;

    const url1 = "https://fakestoreapi.com/products";
    const url2 = "https://jsonplaceholder.typicode.com/posts";
    const url3 = "https://www.youtube.com/watch?v=SSXA2XluIBU&t=1464s&ab_channel=TutorialsDev"

    useEffect(()=> {
        //console.log("response")
        //console.log(response)
        const getProducts = async () =>{
            
            setLoading(true);
            const response =  await fetch(url1);

            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false)
            }
            return ()=>{
                componentMounted = false;
            }

          
        }

        getProducts();
    }, [])

    console.log(filter);

  return (
    <div className='mt-8'>

      {loading ? <ProductGridLoader/> : <ProductGrid filter={filter}/> }
     
    </div>
  )
}

export default LatestProduct




const ProductGridLoader = () => {
    return (
        <div>
            Loading....
        </div>
     );
}
 



// Refactored Grid Component

const ProductGrid = ({ filter }) => {
    return ( 
        <div>
        <u className='flex list-none no-underline gap-3 justify-center mb-10'>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>All</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Men's Clothing</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Women's Clothing</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Jewelery</li>
            <li className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Eclectronic</li>
        </u>

        <div className=" w-full grid md:grid-cols-4 sm:grid-cols-2 gap-5 px-[5%]">
 
       {
       
       filter.map((product)=>{
        
        return (
            <div className=" shadow-md p-2 rounded-md border-2 border-gray-100 items-center justify-center flex flex-col">
                <div>
                    {/* {product} */}
                </div>
                <div className=" overflow-hidden sm:h-70 w-full rounded-lg flex justify-center items-center">
                    <img src={product.image} alt="" className=' h-64' />
                </div>
                <h4 className='py-2'>Random Title</h4>
                <h4 className=' font-semibold mb-2'>$190.99</h4>
                <button className='border-[1.5px] border-gray-500 px-2 mb-4 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Buy Now</button>
            </div>
        )
       })
       
       }

        </div>
        </div>
     );
}
 
