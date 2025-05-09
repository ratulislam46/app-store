import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import MyProfile from '../Page/MyProfile/MyProfile';
import Apps from '../Page/Apps/Apps'
import Error from "../Page/Error/Error";
import Loading from "../Page/Loading/Loading";
import AppDetails from '../Page/Apps/AppDetails'
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "../Auth/PrivateRoute";
import About from "../Page/About/About";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Apps,
                loader: () => fetch('/appData.json'),
                HydrateFallback: Loading
            },
            {
                path: '/appDetails/:id',
                loader: () => fetch('/appData.json'),
                element: <PrivateRoute>
                    <AppDetails></AppDetails>
                </PrivateRoute>,
                HydrateFallback: Loading
            },
            {
                path: '/myprofile',
                Component: MyProfile
            },
            {
                path: '/about',
                Component : About
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/*',
        Component: Error
    }
])