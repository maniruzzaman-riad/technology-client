import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Update = () => {
    const selectProduct = useLoaderData()
    const navigate = useNavigate()
    // console.log(selectProduct);
    const { _id, name, brand, image, rating, price, type } = selectProduct


    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const type = form.type.value;
        const updatedProduct = { name, brand, price, rating, image, type }
        // console.log(updatedProduct);

        fetch(`https://technology-10th-assignment-server.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Update Succesfull',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                navigate('/')
            })
        // .catch(error=>{
        //     console.error(error);
        // })
    }

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-5">Update Field</h1>
            <h2 className="ms-5 text-base">Input new data and click <span className="text-lg font-semibold bg-blue-700 text-white px-3 py-1 rounded-xl">Update</span> for Chainge information</h2>
            <div className="shadow-2xl bg-base-100">
                <form onSubmit={handleUpdateProduct} className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Name *</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Brand Name *</span>
                            </label>
                            <select type="select" name="brand" defaultValue={brand} className="select select-bordered w-full">
                                {/* <option disabled selected>Choose a Brand</option> */}
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Intel">Intel</option>
                                <option value="Google">Google</option>
                                <option value="Walton">Walton</option>
                                <option value="Sony">Sony</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Price *</span>
                            </label>
                            <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Rating *</span>
                            </label>
                            <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Type *</span>
                            </label>
                            <input type="text" placeholder="Category" name="type" defaultValue={type} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-base font-bold">Image *</span>
                        </label>
                        <input type="text" placeholder="Image Link" name="image" defaultValue={image} className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;