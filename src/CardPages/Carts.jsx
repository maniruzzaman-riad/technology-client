import { useLoaderData } from "react-router-dom";


const Carts = () => {
    const cartData = useLoaderData()
    console.log(cartData);
    return (
        <div>
            <h2>This is Cart {cartData[0]?.name}</h2>
        </div>
    );
};

export default Carts;