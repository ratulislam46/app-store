import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Team = () => {
    return (
        <div>
            <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <p className="inline-block py-px mb-4 text-2xl font-semibold tracking-wider bg-sky-400 text-white px-12 uppercase rounded-full bg-teal-accent-400">
                        Know Our Team
                    </p>
                    <p className="text-base text-gray-500 md:text-lg">
                        "Building an app store is not a one-person job; it requires collaboration between designers, developers, testers, and project managers, all working together towards a common goal."
                    </p>
                </div>
                <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                    <div className="grid sm:grid-cols-3">
                        <div className="relative w-full max-h-full rounded shadow sm:h-auto">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://i.postimg.cc/PxkQCrGp/img.png"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-lg font-bold">Ratul Islam</p>
                            <p className="mb-4 text-xs text-gray-800">Manager</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-800">
                                Vincent Van Gogh’s most popular painting, The Starry Night.
                            </p>
                            <div className="flex items-center space-x-3">
                                <FaFacebook size={24}></FaFacebook>
                                <FaInstagram size={24}></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3">
                        <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://i.postimg.cc/0N7p1R68/FB-IMG-1638791236402.jpg"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-lg font-bold">Midul Islam Rigan</p>
                            <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-800">
                                Amet I love liquorice jujubes pudding croissant I love pudding.
                            </p>
                            <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-3">
                                <FaFacebook size={24}></FaFacebook>
                                <FaInstagram size={24}></FaInstagram>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3">
                        <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://i.postimg.cc/wvvTcDYS/FB-IMG-1593317943446.jpg"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-lg font-bold">Assadulla</p>
                            <p className="mb-4 text-xs text-gray-800">Human Resources</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-800">
                                Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
                                elit.
                            </p>
                            <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-3">
                                <FaFacebook size={24}></FaFacebook>
                                <FaInstagram size={24}></FaInstagram>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3">
                        <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://i.postimg.cc/xCTqxWMp/In-Shot-20220428-225810541.jpg"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-lg font-bold">Amanulla</p>
                            <p className="mb-4 text-xs text-gray-800">Good guy</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-800">
                                Bacon ipsum dolor sit amet salami jowl corned beef, andouille
                                flank.
                            </p>
                            <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-3">
                                <FaFacebook size={24}></FaFacebook>
                                <FaInstagram size={24}></FaInstagram>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;