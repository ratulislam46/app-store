import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import MyProfile from '../Page/MyProfile/MyProfile';
import Apps from '../Page/Apps/Apps'
import Error from "../Page/Error/Error";
import Loading from "../Page/Loading/Loading";
import Home from '../Page/Home/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/apps',
                element: <Apps></Apps>,
                loader: () => fetch('/appData.json'),
                HydrateFallback: Loading
            },
            {
                path: '/myprofile',
                Component: MyProfile
            }
        ]
    },
    {
        path: '/*',
        Component: Error
    }
])