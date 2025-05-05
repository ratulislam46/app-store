import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='min-h-[calc(100vh-200px)]'>
                <section>
                    <Outlet></Outlet>
                </section>
                <section>

                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;