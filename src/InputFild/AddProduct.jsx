import Swal from 'sweetalert2'

const AddProduct = () => {


    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const type = form.type.value;
        const description = form.description.value;

        const newProduct = { name, brand, price, rating, image, type, description }
        // console.log(newProduct);
        fetch('https://technology-10th-assignment-server.vercel.app/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'New Product Added',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    e.target.reset()
                }
            })
    }

    return (
        <div>
            <div className="">
                <div className="">
                    <h1 className="text-5xl font-bold text-center mb-5">Add a New Product</h1>
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div className="shadow-2xl bg-base-100">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-base font-bold">Name *</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-base font-bold">Brand Name *</span>
                                    </label>
                                    <select type="select" name="brand" className="select select-bordered w-full">
                                        <option disabled selected>Choose a Brand</option>
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
                                    <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-base font-bold">Rating *</span>
                                    </label>
                                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-base font-bold">Type *</span>
                                    </label>
                                    <input type="text" placeholder="Category" name="type" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Image *</span>
                                </label>
                                <input type="text" placeholder="Image Link" name="image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Description *</span>
                                </label>
                                <textarea className="input input-bordered" placeholder="Write Your Short description" name="description" id="" cols="30" rows="10" required></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;