

const Banner = () => {
    return (
        <div className="mt-12">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6tkWVZP/austin-distel-rxp-Th-Owu-Vg-E-unsplash-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Welcome to TechPro - Your Gateway to Cutting-Edge Technology! Discover the latest in smartphones, laptops, gadgets, and more. Stay ahead of the tech curve with our expert reviews, in-depth guides, and the hottest tech trends. Explore a world of innovation and make informed choices with TechPro. Your destination for all things tech!.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;