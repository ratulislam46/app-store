import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


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


    const changeProfileInfo = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                setUser({
                    ...auth.currentUser,
                    displayName: name,
                    photoURL: photoURL,
                });
            });
    }


    const authData = {
        createRegister,
        signIn,
        user,
        setUser,
        logOut,
        loading,
        setLoading,
        googleSingIn,
        changeProfileInfo
    }

    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;