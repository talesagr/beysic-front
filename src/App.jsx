import React from 'react';
import ReactDom from "react-dom/client";
import Main from "./pages/main";
import Login from './pages/login'
import Register from './pages/register';
import './index.css'

import { createBrowser, createBrowserRouter, RouterProvider} from "react-router-dom";

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

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

function App() {
    return (
        <div className='app'>
            <Login />
        </div>
    );
}

export default App;
