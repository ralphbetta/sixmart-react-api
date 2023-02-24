import React, {useState, useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";


// import { useNavigate } from 'react-router-dom'

const image = "https://picsum.photos/200/300"

const LatestProduct = () => {

    const [data, setData] = useState([]);
    const [filteredList, setFilteredList] = useState(data);
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
                setFilteredList(await response.json())
                setLoading(false)
            }
            return ()=>{
                componentMounted = false;
            }

          
        }

        getProducts();
    }, [])

    console.log(filteredList);

        
    const filterProduct = (param) => {
         setFilteredList(data)
        console.log({param})
        const updatedList = filteredList.filter((x)=> x.category === param)
        console.log(updatedList)
        setFilteredList(updatedList)
    }


  return (
    <div className='mt-8'>

      {loading ? <ProductGridLoader/> : <ProductGrid filteredList={filteredList} data={data} handleFilter={filterProduct} setFilteredList={setFilteredList} /> }
     
    </div>
  )
}

export default LatestProduct




const ProductGridLoader = () => {
    return (
      <div>
        <div className="justify-center h-52  col-span-3">
           <Skeleton className=""/>
        </div>
        <div className="justify-center h-52  col-span-3">
           <Skeleton className=""/>
        </div>
        <div className="justify-center h-52  col-span-3">
           <Skeleton className=""/>
        </div>
        <div className="justify-center  h-52 col-span-3">
           <Skeleton className=""/>
        </div>
      </div>
     );
}


 
 



// Refactored Grid Component

const ProductGrid = ({ filteredList, data, handleFilter, setFilteredList }) => {



    return ( 
        <div>
        <div className='flex list-none no-underline gap-3 justify-center mb-10'>
            <button onClick={()=>setFilteredList(data)} className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>All</button>
            <button onClick={()=>handleFilter("men's clothing")} className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Men's Clothing</button>
            <button onClick={()=>handleFilter("women's clothing")} className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Women's Clothing</button>
            <button onClick={()=>handleFilter("jewelery")} className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Jewelery</button>
            <button onClick={()=>handleFilter("Electronic")} className='border-[1.5px] border-gray-500 px-2 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Electronic</button>
        </div>

        <div className=" w-full grid md:grid-cols-4 sm:grid-cols-2 gap-5 px-[5%]">
 
       {
       
       filteredList.map((product, index)=>{
        
        return (
            <div className=" shadow-md p-2 rounded-md border-2 border-gray-100 items-center justify-center flex flex-col" key={product.id}>
                <div className=" overflow-hidden sm:h-70 w-full rounded-lg flex justify-center items-center">
                <img src={product.image} alt="" className=' h-64' />
                </div>
                <h4 className='py-2 ali text-center text-gray-600 text-[15px]'>{product.title}...</h4>
                <h4 className=' font-semibold mb-2'>${product.price}</h4>
                <NavLink to={`/product/${product.id}`} className='border-[1.5px] border-gray-500 px-2 mb-4 rounded-sm text-gray-500 bg-white hover:bg-gray-500 hover:text-white cursor-pointer'>Buy Now</NavLink>
            </div>
        )
       })
       
       }

        </div>
        </div>
     );
}
 
