import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Details = () => {
    const singleProduct = useLoaderData()
    const [allCart, setAllCart] = useState([])
    const [change, setChange] = useState(false)
    const { _id, name, brand, image, rating, price, type, description } = singleProduct

    // console.log(change);
    // console.log(allCart);

    useEffect(() => {
        fetch('https://technology-10th-assignment-server.vercel.app/cart')
            .then(res => res.json())
            .then(cartData => setAllCart(cartData))
    }, [change])

    const handleAddToCart = (id) => {
        setChange(true)
        const previewCarts = allCart.find(matchCart => matchCart._id === id)

        if (!previewCarts) {
            fetch('https://technology-10th-assignment-server.vercel.app/cart', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(singleProduct)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Add to Cart Succesfully',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                    console.log(data);
                })
        } else if (previewCarts) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Already added Cart',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
                <img className="w-full h-[500px] rounded-lg" src={image} alt="" />
                <div className="px-7">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <h2 className="text-xl font-bold">{type}</h2>
                    </div>
                    <div className="flex justify-between my-3">
                        <h2 className="text-lg font-semibold">Price: {price}</h2>
                        <h2 className="text-lg font-semibold">Brand:{brand}</h2>
                    </div>
                    <p>{description}</p>
                    <div className="flex justify-between mt-4">
                        <h2>Ratind : {rating}</h2>
                        <button onClick={() => handleAddToCart(_id)} className="bg-green-500 px-3 py-1 rounded-lg font-bold hover:bg-green-700 hover:text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div>
                <img className="h-full rounded-xl" src="https://i.ibb.co/ZTYvKkx/store.jpg" alt="" />
            </div>
        </div>
    );
};

export default Details;