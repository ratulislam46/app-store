import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router';

const AllApp = ({ app }) => {

    const { name, rating, downloads, banner, id } = app;

    const handleAppDetails = () => {
        console.log('clicked apps');
    }

    return (
        <div>
            <Link to={`/appDetails/${id}`}>
                <div className="card bg-base-100 m-4 border rounded-2xl shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={banner}
                            alt="Shoes"
                            className="rounded-xl h-[#200px]" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">{name}</h2>

                        <div className='lg:flex lg:gap-8 '>

                            {/* rating */}
                            <div className='flex items-center '>
                                <div className="rating mr-2">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                </div>
                                <div className='font-semibold'>{rating}</div>
                            </div>

                            {/* downloads  */}
                            <p className='font-semibold text-sky-400 flex justify-center items-center gap-1 mt-4 lg:mt-0'> <FiDownload /> {downloads}</p>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AllApp;