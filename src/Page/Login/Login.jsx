import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-3xl font-semibold text-center'>Login Now!</h2>
                    <form onSubmit={handleLogIn} className="fieldset">

                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p>If you have no Account? <Link to='/register' className='text-blue-500 underline'>Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;