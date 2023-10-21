import { useLoaderData } from "react-router-dom";


const Details = () => {
    const singleProduct = useLoaderData()
    const { name, brand, image, rating, price, type, description } = singleProduct
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <img className="w-full h-[500px]" src={image} alt="" />
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <h2 className="text-xl font-bold">{type}</h2>
                </div>
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">Price: {price}</h2>
                    <h2 className="text-lg font-semibold">Brand:{brand}</h2>
                </div>
                <p>{description}</p>
                <div className="flex justify-between">
                    <h2>Ratind : {rating}</h2>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div>
                <h2>sideBar</h2>
            </div>
        </div>
    );
};

export default Details;