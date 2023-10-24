import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { logo, brandName } = brand;
    return (
        <div className='border-2 border-purple-600 hover:border-pink-500 rounded-xl hover:bg-gray-200'>
            <Link to={`/products/${brandName}`}>
                <div className="p-8">
                    <img className="rounded-lg w-full h-48" src={logo} alt="" />
                    <h2 className="text-center text-4xl font-bold mt-5">{brandName}</h2>
                </div>
            </Link>
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.object
}
export default Brand;
