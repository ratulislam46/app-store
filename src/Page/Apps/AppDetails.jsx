import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router';

const AppDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id);
    const [install, setInstall] = useState(false)

    const singleApp = data.find(app => app.id == id);
    // console.log(singleApp);
    const { name, developer, thumbnail, banner, category, downloads, features, rating, reviews, description } = singleApp;

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        console.log(review);
    }

    return (
        <div className='my-12'>

            <Helmet>
                <title>AppStore | {name}</title>
            </Helmet>

            <h1 className='text-5xl text-center font-semibold text-sky-400'>{name} App Details</h1>

            {/* app details  */}
            <div className="max-w-6xl mx-auto my-16 bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="relative">
                    <img
                        src={banner}
                        alt="App banner"
                        className="w-full object-cover"
                    />
                    <div className="absolute -bottom-10 left-6">
                        <img
                            src={thumbnail}
                            alt="App thumbnail"
                            className="w-24 h-24 rounded-xl border-4 border-white shadow-lg"
                        />
                    </div>
                </div>

                {/* button install and unstall  */}
                <div onClick={() => setInstall(!install)} className='mx-6 mt-20 text-center inline-block'>
                    {
                        install ?
                            <button className='px-12 lg:px-20 py-2 btn btn-info'>Uninstall</button> :
                            <button className='px-12 lg:px-20 py-2 btn btn-error'>Install</button>
                    }
                </div>

                <div className="px-6 py-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                            <p className="text-sm text-gray-500 mt-1">{developer}</p>
                        </div>
                        <div className="mt-4 sm:mt-0 text-sm text-gray-600 space-y-1">
                            <p><strong>Downloads:</strong> {downloads.toLocaleString()}</p>
                            <p><strong>Category:</strong> {category}</p>
                            <p><strong>Rating:</strong> ⭐ {rating}</p>
                        </div>
                    </div>

                    <p className="text-gray-700 mt-6">{description}</p>

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2 text-gray-800">Key Features</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2 text-gray-800">Top Review</h2>
                        <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                            <p className="font-medium text-gray-700">{reviews[0].user} ⭐ {reviews[0].rating}</p>
                            <p className="text-gray-600 mt-1">{reviews[0].comment}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* review section  */}
            <form onSubmit={handleSubmitReview} className='border border-sky-400 rounded-xl space-y-5 px-6 py-4 my-4 w-full max-w-6xl mx-auto'>
                <h2 className='text-2xl font-semibold'>Your Rating</h2>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div><br />
                <textarea type="text" name='review' placeholder="Write your own opinion . . ." className="textarea w-full"></textarea>
                <p>Lorem ipsum dolor sit amet.</p>
                <button type='submit' className='btn btn-outline btn-success'>Submit Review</button>
            </form>

        </div>
    );
};

export default AppDetails;