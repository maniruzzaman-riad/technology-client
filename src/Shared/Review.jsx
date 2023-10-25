

const Review = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-6">Our Customar Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="text-center border-x-2 border-x-purple-700 p-4">
                    <img className="w-40 h-40 rounded-full mx-auto" src="https://i.ibb.co/FDVG554/profile1-1.jpg" alt="" />
                    <h2 className="text-xl font-bold my-4">Farhana Juti</h2>
                    <p>I recently shopped at TechPro and was thoroughly impressed. Their user-friendly site, extensive digital product range, and prompt service make them stand out. Quick delivery, perfect items, and responsive support create a satisfying shopping experience. Highly recommend TechPro for all digital needs.</p>
                    <div className="rating rating-sm mt-4">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                </div>
                <div className="text-center border-x-2 border-x-purple-700 p-4">
                    <img className="w-40 h-40 rounded-full mx-auto" src="https://i.ibb.co/S3Bk7mX/profile4-1.jpg" alt="" />
                    <h2 className="text-xl font-bold my-4">Kabir Sing</h2>
                    <p>Shopping at TechPro is like stepping into a tech enthusiasts paradise. The variety of digital products is unmatched. I found the latest gadgets and software I needed, and the checkout process was a breeze. Fast delivery and top-notch customer support make this shop a winner.</p>
                    <div className="rating rating-sm mt-4">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className="text-center border-x-2 border-x-purple-700 p-4">
                    <img className="w-40 h-40 rounded-full mx-auto" src="https://i.ibb.co/9cYRSH7/profile3-1.jpg" alt="" />
                    <h2 className="text-xl font-bold my-4">Jon Milton</h2>
                    <p>I recently had the pleasure of shopping at TechPro and it was a delightful experience. The shops extensive selection, user-friendly website, and quick response from their support team made finding and purchasing digital products a breeze. My items arrived promptly and in perfect condition. Highly recommended.</p>
                    <div className="rating rating-sm mt-4">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                </div>
                <div className="text-center border-x-2 border-x-purple-700 p-4">
                    <img className="w-40 h-40 rounded-full mx-auto" src="https://i.ibb.co/PCv3j0S/profile2-1.jpg" alt="" />
                    <h2 className="text-xl font-bold my-4">Monalisa</h2>
                    <p>TechPro is a standout in the digital retail world. I couldnt be happier with my shopping experience. The wide array of digital products, intuitive website, and exceptional customer service exceeded my expectations. Swift delivery and excellent communication make this shop my go-to for all things digital.</p>
                    <div className="rating rating-sm mt-4">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;