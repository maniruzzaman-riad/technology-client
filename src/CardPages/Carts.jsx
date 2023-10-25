import { useLoaderData } from "react-router-dom";
import { RxCross1 } from 'react-icons/rx';
import { useState } from "react";
import Swal from 'sweetalert2'
// import Cart from "./Cart";


const Carts = () => {
    const cartData = useLoaderData()
    const [totalCart, setTotalCart] = useState(cartData)
    const [countCart, setCountCart] = useState(cartData.length)
    console.log(cartData);

    const handleDeleteCart = (id) => {
        console.log(id);
        fetch(`https://technology-10th-assignment-server.vercel.app/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'Delete Succesfully',
                        showConfirmButton: false,
                        timer: 2500
                    })
                    const remainingCart = totalCart.filter(newCart => newCart._id !== id)
                    setTotalCart(remainingCart)
                    setCountCart(countCart - 1)
                }
            })

    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Total Cart Product : {countCart}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-2">
                    {
                        totalCart.map(cart => <>
                            <div className="border-2 border-purple-600 rounded-lg flex justify-between pe-5 md:pe-12 items-center mb-4">
                                <div className="flex items-center gap-7">
                                    <img className="w-40 h-40" src={cart.image} alt="" />
                                    <div className="text-xl font-bold space-y-3 hidden md:block">
                                        <h2>{cart.name}</h2>
                                        <h2>{cart.price} BDT</h2>
                                        <h2>Brand : {cart.brand}</h2>
                                    </div>
                                </div>
                                <button onClick={() => handleDeleteCart(cart._id)} className="btn text-2xl font-extrabold"><RxCross1></RxCross1></button>
                            </div>

                        </>)
                    }
                </div>
                <div>
                    <img className="border-2 rounded-xl" src="https://i.ibb.co/s1GZrJm/offer.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Carts;