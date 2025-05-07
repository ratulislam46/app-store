import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user);

    const createRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const logOut = () => {
        return signOut(auth);
    }

    const authData = {
        createRegister,
        signIn,
        user,
        setUser,
        logOut
    }

    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;