import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Register from "./pages/register";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Main />
    },
    {
        path : "/Login",
        element : <Login />
    },
    {
        path : "/Register",
        element : <Register />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);