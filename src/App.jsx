import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import PrivateRoute from './components/PrivateRoute';
import Forgot from  './pages/forgot';
import './index.css'
import EventsDetails from './pages/events';

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute component={Main} />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path : "/Forgot",
        element : <Forgot />
    },
    {
        path  : "/event/:id",
        element : <EventsDetails />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
