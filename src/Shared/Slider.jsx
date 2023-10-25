

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-72 md:h-[550px]">
                    <img src="https://i.ibb.co/wStffG2/banner4.jpg" className="w-full object-cover md:object-fill" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                    <div className="absolute text-white w-[150px] ms-14 md:top-1/3">
                        <h2 className="text-4xl md:text-7xl font-bold">Hot <span className="ms-12 text-orange-600">Winter</span> <span className="ms-24 text-blue-700">Discount</span></h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-72 md:h-[550px]">
                    <img src="https://i.ibb.co/1GCZRp5/18899294-1.jpg" className="w-full object-cover md:object-fill" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                    <div className="absolute text-white top-[6%] md:top-[12%] left-[10%] md:left-[15%]">
                        <h2 className="text-4xl md:text-7xl font-bold">We Provide <span className="text-orange-600">Best</span> Product</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-72 md:h-[550px]">
                    <img src="https://i.ibb.co/1v0FVkC/banner1.jpg" className="w-full object-cover md:object-fill " />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                    <div className="absolute text-white top-7 left-10">
                        <h2 className="text-4xl md:text-7xl font-bold">Big <span className="text-blue-700">Discount</span> for <span className="text-orange-600">Combo</span> Offer....</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-72 md:h-[550px]">
                    <img src="https://i.ibb.co/2sNL09R/banner3.jpg" className="w-full object-cover md:object-fill" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                    <div className="absolute text-white w-[150px] ms-14 md:top-1/3">
                        <h2 className="text-4xl md:text-7xl font-bold">Hot <span className="ms-12 text-orange-600">Winter</span> <span className="ms-24 text-blue-700">Discount</span></h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;