import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import MyProfile from '../Page/MyProfile/MyProfile';
import Apps from '../Page/Apps/Apps'
import Error from "../Page/Error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, path: '/', element: <Apps></Apps> },
            { path: '/myprofile', Component: MyProfile }
        ]
    },
    {
        path: '/*',
        Component: Error
    }
])