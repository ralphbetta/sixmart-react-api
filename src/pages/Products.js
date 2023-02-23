import React, {useState, useEffect} from "react";
import LatestProduct from "../component/LatestProduct";
import { Navbar } from "../component/Navbar";

function Products() {
    
    return ( <div>
        <Navbar />
        <LatestProduct />
    </div> );
}

export default Products;