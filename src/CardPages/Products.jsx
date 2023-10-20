
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";



const Products = () => {
    // const products = useLoaderData()
    const [products, setProducts] = useState([])
    const { brandName } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/products/${brandName}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(brandName);
    // console.log(products);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                <div>
                    <h2>Side Banner</h2>
                </div>
            </div>

        </div>
    );
};

export default Products;