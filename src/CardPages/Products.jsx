
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import Slider from "../Shared/Slider";



const Products = () => {
    // const products = useLoaderData()
    const [products, setProducts] = useState([])
    const { brandName } = useParams()

    useEffect(() => {
        fetch(`https://technology-10th-assignment-server.vercel.app/products/${brandName}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(brandName);
    // console.log(products);

    return (
        <div>
            <Slider></Slider>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
                {
                    products.length === 0 ? 
                    <><div className="md:col-span-2 text-center text-4xl font-bold mt-20">No Product Avilable.</div></>
                     :
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                }
                
                <div>
                    <img className="h-full rounded-xl" src="https://i.ibb.co/s5BHpz9/side-Banner.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Products;