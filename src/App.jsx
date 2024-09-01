import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import PrivateRoute from './components/PrivateRoute';

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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
