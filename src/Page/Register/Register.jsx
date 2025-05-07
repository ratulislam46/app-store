import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import Navbar from '../../Components/Navbar/Navbar';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { createRegister, setUser, googleSingIn } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        // password varified 
        if (password.length < 5) {
            toast.error('Password must be 5 character')
            return;
        }
        const uppercaseRegex = /[A-Z]/;
        if (!uppercaseRegex.test(password)) {
            toast.error('Password must be one uppercase letter');
            return;
        }
        const lowercaseRegex = /[a-z]/;
        if (!lowercaseRegex.test(password)) {
            toast.error('Password must be one lowercase letter');
            return;
        }

        createRegister(email, password)
            .then(result => {
                console.log(result);
                const data = result.user;
                toast.success('Congratulations your registration successfull');
                setUser(data)
            })
            .catch(error => {
                console.log(error);
                toast.error(error)
            })

    }


    const handleRegisterGoogle = () => {
        googleSingIn()
            .then(result => {
                console.log(result);
                toast.success("Register successfully")
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                toast.error(errorCode, errorMessage)
            })
    }



    return (
        <div>

            <Helmet>
                <title>AppStore | Register</title>
            </Helmet>

            <Navbar></Navbar>


            <div className='min-h-screen flex justify-center items-center bg-[#0fa3b1]'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                    <div className="card-body">
                        <h2 className='text-3xl font-semibold text-center'>Register Now!</h2>
                        <form onSubmit={handleRegister} className="fieldset">

                            {/* name  */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            {/* photo url  */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" />

                            {/* email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            {/* password  */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </form>


                        {/* Google */}
                        <button onClick={handleRegisterGoogle} className="btn bg-white text-black border-[#e5e5e5] mt-1">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                        </button>
                        <p>Already you have Account? <Link to='/login' className='text-blue-500 underline'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;