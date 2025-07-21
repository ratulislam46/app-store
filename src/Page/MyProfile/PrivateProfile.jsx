import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateProfile = ({ children }) => {

    const { user, loading } = use(AuthContext)
    console.log(loading);

    if (loading) return <Loading></Loading>

    return user ? children : <Navigate to='/login'></Navigate>
};

export default PrivateProfile;