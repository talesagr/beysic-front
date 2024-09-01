import './register.css';

import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Notification from "../Notification";

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não correspondem");
      setSuccess(null);
      return;
    }
    const userData = {
      name,
      email,
      password
    }

    try {
      const response = await  axios.post('http://localhost:3000/user', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 201 || 200) {
        setSuccess("Cadastro realizado com sucesso!")
        setError(null);
      } else {
        setError("Erro ao realizar o cadastro");
        setSuccess(null);
      }
    } catch (err) {
      setError("Erro interno de servidor")
      setSuccess(null);
    }
  };

  return (
    <div className='home'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <div className='input-field'>
            <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
            <FaUser className='icons'></FaUser>
          </div>
          <div className='input-field'>
            <input type="Email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <FaUser className='icons'></FaUser>
          </div>
          <div className='input-field'>
            <input type="Password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className='icons'></FaLock>
          </div>
          <div className='input-field'>
            <input type="Password" placeholder='Confirme sua senha' onChange={(e) => setConfirmPassword(e.target.value)}/>
            <FaLock className='icons'></FaLock>
          </div>
          <div className="recall-forget">
          </div>

          <Notification message={success} type='success' onClose={()=> setSuccess(null)}/>
          <Notification message={error} type='error' onClose={()=> setError(null)}/>

          <div>
            <button>Finalizar Cadastro</button>
          </div>
          <div className='signup-link'>
            <p>
              Já possui uma conta ? <a href="#"><Link to="/Login">Faça seu login </Link></a>
            </p>
          </div>
        </form>
      </div>
    </div>

  )
};

export default RegisterForm;

