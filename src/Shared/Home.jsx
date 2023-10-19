import { useEffect } from "react";
import { useState } from "react";
import Banner from "./Banner";
import Brand from "../CardPages/Brand";


const Home = () => {
    const [brands,setBrands]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-4">
                {
                    brands.map(brand=><Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Home;