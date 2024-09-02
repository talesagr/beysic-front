import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import RegisterForm from '../../components/RegisterForm';
import './register.css'
import axios from "axios";

export default function Register() {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false);

    const handleRegister = async (userData) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/user', userData,
                {headers: {
                    'Content-Type': 'application/json'
            }});

            if(response.status === 201 || response.status === 200){
                setSuccess("Cadastro realizado com sucesso!");
                setError(null);
            } else {
                setError("Erro ao realizar o cadastro");
                setSuccess(null);
            }
        } catch (err){
            setError("Erro interno de servidor");
            setSuccess(null);
        } finally {
            setLoading(false);
        }
    }

    return(
        <>
            <Navbar/>
            <body className='register-body'>
                <RegisterForm
                    onSubmit={handleRegister}
                    error={error}
                    success={success}
                    loading={loading}
                    setSuccess={setSuccess}
                    setError={setError}
                />
            </body>
        </>
    )
}