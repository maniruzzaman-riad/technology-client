import { useEffect } from "react";
import { useState } from "react";
import Banner from "./Banner";
import Brand from "../CardPages/Brand";
import Carosel from "./Carosel";
import Review from "./Review";


const Home = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('https://technology-10th-assignment-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl font-bold text-center mb-6">Browse Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
            <div>
                <Carosel></Carosel>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;