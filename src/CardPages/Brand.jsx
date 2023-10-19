import PropTypes from 'prop-types';

const Brand = ({brand}) => {
    const {logo,brandName}=brand;
    return (
        <div>
            <div className="p-8">
                <img className="rounded-lg w-full h-48" src={logo} alt="" />
                <h2 className="text-center text-4xl font-bold mt-5">{brandName}</h2>
            </div>
        </div>
    );
};

Brand.propTypes={
    brand:PropTypes.object
}
export default Brand;
