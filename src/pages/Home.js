
import React from 'react'
import Banner from '../component/Banner';
import Divider from '../component/Divider';
import LatestProduct from '../component/LatestProduct';
import { Navbar } from '../component/Navbar';




function Home() {
    return ( 
        <div>
            <Navbar/>
            <Banner/>
            <Divider title={"Latest Product"}/>
            <LatestProduct/>
       </div>
     );
}

export default Home;


