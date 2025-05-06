import React from 'react';
import { FiDownload } from 'react-icons/fi';

const ShowApp = ({ apps, title }) => {

    console.log(apps); 

    return (
        <div className='my-10 border rounded-2xl py-5'>
            <h2 className='text-3xl font-semibold border-b pb-4 pl-5'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>

                {/* apps gulo array akar a ache tai map caliye niyeci */}

                {
                    apps.map(app =>
                        <div key={app.id} className="card bg-base-100 m-4 border rounded-2xl shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">{app.name}</h2>
                                <div className='lg:flex lg:gap-8 '>

                                    {/* rating */}
                                    <div className='flex items-center '>
                                        <div className="rating mr-2">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                        </div>
                                        <div className='font-semibold'>{app.rating}</div>
                                    </div>

                                    {/* downloads  */}
                                    <p className='font-semibold text-sky-400 flex justify-center items-center gap-1 mt-4 lg:mt-0'> <FiDownload/> {app.downloads}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowApp;