import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[350px] md:h-[450px] lg:h-[650px]">
                <img
                    src="https://i.postimg.cc/Bbrts5n2/apps-22-e1503524872139.jpg"
                    className="w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[350px] md:h-[450px] lg:h-[650px]">
                <img
                    src="https://i.postimg.cc/MZ7TNLkp/hogyan-kapcsold-ki-automatikus-app-letolteseket-iphone-on-5c3334baa685e.jpg"
                    className="w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[350px] md:h-[450px] lg:h-[650px]">
                <img
                    src="https://i.postimg.cc/wM29vSH5/ios-mobile-application-development-service.jpg"
                    className="w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[350px] md:h-[450px] lg:h-[650px]">
                <img
                    src="https://i.postimg.cc/wBRxVfcH/Mobile-App-Developer.webp"
                    className="w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;