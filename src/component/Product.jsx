// import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom';

// const Product = () => {

//     const {id} =useParams();
//     const [product, setProduct] = useState([]);
//     const [loading, setloading] = useState(false);

//     const url1 = "https://fakestoreapi.com/products";

//     useEffect(() => {

//         const getProduct = async () => {
//             setloading(true)
//             const response = await fetch(`https://fakestoreapi.com/products/${id}`);   
//             setProduct(await response.json())  
//             setloading(false)      
//         }
         
//         getProduct()
//     }, [input]);
//   return (
//     <div>{product.title}</div>
//   )
// }

// export default Product