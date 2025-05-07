import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-10">

            <div className="footer p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
               
                <div>
                    <h2 className="text-2xl font-bold text-sky-400">AppStore</h2>
                    <p className='w-[70%]'>Experience the best of mobile life. Download now from App Store.</p>

                </div>

                
                <div>
                    <span className="footer-title">Useful Links</span>
                    <Link to="/terms" className="link link-hover">Terms of Service</Link>
                    <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
                    <Link to="/developer" className="link link-hover">Developer Resources</Link>
                </div>

                
                <div>
                    <span className="footer-title">Follow Us</span>
                    <div className='grid grid-cols-3 gap-5'>
                        <Link><FaFacebook size={24}></FaFacebook></Link>
                        <Link><FaInstagram size={24}></FaInstagram></Link>
                        <Link><FaYoutube size={24}></FaYoutube></Link>
                    </div>
                </div>
            </div>

            <div className="text-center p-4 bg-base-300 text-sm">
                © 2025 AppStore. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;