import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import MyProfile from '../Page/MyProfile/MyProfile';
import Apps from '../Page/Apps/Apps'
import Error from "../Page/Error/Error";
import Loading from "../Page/Loading/Loading";
import AppDetails from '../Page/Apps/AppDetails'


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
                Component: AppDetails
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