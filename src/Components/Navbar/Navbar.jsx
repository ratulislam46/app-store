import React, { use } from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import '../Navbar/Navbar.css'
import { AuthContext } from '../../Auth/AuthProvider';
import toast from 'react-hot-toast';
import { img } from 'framer-motion/client';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);

    const links = <>
        <li className='mr-2'> <NavLink to='/'> Apps </NavLink> </li>
        <li className='mr-2'> <NavLink to='/myprofile'> My Profile </NavLink> </li>
        <li className='mr-2'> <NavLink to='/about'> About</NavLink> </li>
    </>


    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Sign-out successful')
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="navbar bg-sky-400 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <h3 className="font-bold text-white text-xl flex items-center gap-2"><FaAppStoreIos size={24}></FaAppStoreIos> AppStore</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user ? user?.photoURL ?
                            <img src={user.photoURL} className={`h-[40px] rounded-2xl mr-2 hover:${user.email}`}></img> : 
                            <p className='mr-2 text-white font-semibold text-xl'>{user.email}</p>
                            : " "
                    }
                </div>
                {
                    user ?
                        <button onClick={handleLogout} className='btn'>Logout</button> :
                        <Link to='/login' className='btn'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;