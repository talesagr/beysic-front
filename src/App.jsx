import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import PrivateRoute from './components/PrivateRoute';
import Forgot from  './pages/forgot';
import './index.css'
import EventsDetails from './pages/events';
import NewEventsForm from './pages/newEvents';
import Tickets from './pages/tickets';
import Contact from './pages/contact';
import Agenda from './pages/agenda';

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
        path : "/forgot",
        element : <Forgot />
    },
    {
        path  : "/event/:id",
        element : <EventsDetails />
    }, 
    {
        path  : "/newEventsForm",
        element : <NewEventsForm />
    },
    {
        path : "/tickets",
        element : <Tickets />
    },
    {
        path : "/contact",
        element : <Contact />
    },
    {
        path : "/agenda",
        element : <Agenda />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
