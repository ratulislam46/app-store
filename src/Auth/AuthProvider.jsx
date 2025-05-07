import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()
    // console.log(user, loading);

    const createRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const logOut = () => {
        return signOut(auth);
    }

    const googleSingIn = () => {
       return signInWithPopup(auth, provider)
    }

    const authData = {
        createRegister,
        signIn,
        user,
        setUser,
        logOut,
        loading,
        setLoading,
        googleSingIn
    }

    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;