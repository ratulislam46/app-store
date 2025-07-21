import React, { use, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {

    const { changeProfileInfo, user } = use(AuthContext);
    console.log(user);

    const [name, setName] = useState(user?.displayName || '')
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '')


    const handleUpdate = (e) => {
        e.preventDefault()

        changeProfileInfo(name, photoURL)
            .then(() => {
                toast.success('Profile update successfully');
            })
            .catch(error => {
                toast.error(error);
            })
    }

    return (

        <div className='space-y-4  inline-block px-6 py-6 border-b-orange-400 shadow-2xl mt-4 rounded-md'>

            <Helmet>
                <title>AppStore | MyProfile</title>
            </Helmet>

            <h2 className='text-2xl font-semibold'>Name : {user?.displayName}</h2>
            <p className='text-xl text-gray-500'>Email : {user?.email}</p>
            <img src={user?.photoURL} alt="" width='100' />

            <form onSubmit={handleUpdate}>
                <input onChange={(e) => setName(e.target.value)} type="text" name="" placeholder='Name' className='px-6 py-2 input rounded-md my-4' />
                <br />
                <input onChange={(e) => setPhotoURL(e.target.value)} type="text" name="" placeholder='Photo URL' className='px-6 py-2 input rounded-md' />
                <br />
                <button type="submit" className='btn mt-4 hover:btn-success hover:text-white'>Update Profile</button>
            </form>

        </div>
    );
};

export default MyProfile;
