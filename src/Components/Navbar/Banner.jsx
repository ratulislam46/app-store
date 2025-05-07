import React from 'react';

const Banner = () => {
    return (

        <div className='relative'>
            <div className="carousel w-full mt-4">
                <div id="slide1" className="carousel-item relative w-full h-[350px] md:h-[450px] lg:h-[650px]">
                    <img
                        src="https://i.postimg.cc/QMfNVhR4/istockphoto-1193278024-612x612.jpg"
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[350px] md:h-[450px] lg:h-[650px]">
                    <img
                        src="https://i.postimg.cc/wTMXBjZP/360-F-651779668-Rt-Iu-IZw-T2-J248-Kp-R1-H5e-Is3-J8y-OGd4m-C.jpg"
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[350px] md:h-[450px] lg:h-[650px]">
                    <img
                        src="https://i.postimg.cc/XNzZQc1H/1-3vru5-O1aswmndq-0-OHl-Hhw.jpg"
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[350px] md:h-[450px] lg:h-[650px]">
                    <img
                        src="https://i.postimg.cc/X7r5bDy6/360-F-419269782-9-Ls-P3-TQnd-MVn-Z2j3-Zh-TPh-Mjaq-Qp-FAth9.jpg"
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/3 left-8 md:left-14 lg:left-36 transform -translate-y-1/2 text-white">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 mt-32">All-in-One App Hub</h2><br />
                <p className="text-gray-300 w-[80%] md:w-[70%] lg:w-[50%]"> Discover a curated collection of top-rated mobile apps across health, productivity, lifestyle, and more — all in one seamless platform. we bring you secure, smart, and user-friendly solutions that fit right into your daily life. Start exploring and find your next favorite app today.</p>
            </div>
        </div>
    );
};

export default Banner;