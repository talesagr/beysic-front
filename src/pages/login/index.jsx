import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form/index';
import './login.css';

export default function Login() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (loginData) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/auth/login', loginData);
            localStorage.setItem('token', response.data.access_token);
        } catch (err) {
            setError('Falha na autenticação, por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className='login-body'>
                <Form onSubmit={handleLogin} error={error} loading={loading} />
            </div>
        </>
    );
}
