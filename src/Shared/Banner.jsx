

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Rh0JhqF/4590878-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover Innovation at <span className="text-orange-600">TechPro</span></h1>
                        <p className="mb-5"><span className="text-3xl font-bold text-orange-700">Welcome</span> to <span className="text-xl font-bold text-orange-600">TechPro</span> - Your Gateway to Cutting-Edge Technology! Discover the latest in smartphones, laptops, gadgets, and more. Stay ahead of the tech curve with our expert reviews, in-depth guides, and the hottest tech trends. Explore a world of innovation and make informed choices with TechPro. Your destination for all things tech!.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;