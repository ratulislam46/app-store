import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photo,email,password);
    }

    return (
        <div className='min-h-screen flex justify-center items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body">
                    <h2 className='text-3xl font-semibold text-center'>Register Now!</h2>
                    <form onSubmit={handleRegister} className="fieldset">

                        {/* name  */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Email" />
                        
                        {/* photo url  */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Email" />
                        
                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p>Already you have Account? <Link to='/login' className='text-blue-500 underline'>Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;