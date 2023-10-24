import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, brand, image, rating, price, type } = product
    // console.log(product);
    return (
        <div className='border-2 border-purple-700 p-5 rounded-xl'>
            <img className='w-full h-48' src={image} alt="" />
            <h2 className='text-2xl font-bold my-5'>{name}</h2>
            <div className='text-lg font-semibold flex justify-between'>
                <h2>Brand : {brand}</h2>
                <h2>Type : {type}</h2>
            </div>
            <div className='text-lg font-semibold flex justify-between my-4'>
                <h2>Price : {price} BDT</h2>
                <h2>Rating : {rating}</h2>
            </div>
            <div className='flex justify-between'>
                <Link to={`/details/${_id}`}><button className="btn btn-info">Details</button></Link>
                <Link to={`/update/${_id}`}><button className='btn btn-warning'>Update</button></Link>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
}
export default Product;