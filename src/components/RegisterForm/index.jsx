import './register.css';

import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Notification from "../Notification";
import CheckboxComponent from '../CheckBoxComponent';

const RegisterForm = ({onSubmit, error, success, loading, setError, setSuccess}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isProducer, setIsProducer] = useState("");

  const handleCheckboxChange = (isChecked) => {
    setIsProducer(isChecked);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      onSubmit({error: "As senhas não correspondem", success: null})
      return;
    }

    const userData = {
      name,
      email,
      password,
      isProducer
    }

    onSubmit(userData);
  };

    return (
        <div className='home'>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <h1>Cadastre-se</h1>
              <div className='input-field'>
                <input
                  type="text"
                  placeholder='Nome'
                  onChange={(e) => setName(e.target.value)}
                />
                <FaUser className='icons'></FaUser>
              </div>
              <div className='input-field'>
                <input 
                  type="Email" 
                  placeholder='Email' 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FaUser className='icons'></FaUser>
              </div>
              <div className='input-field'>
                <input 
                  type="Password" 
                  placeholder='Senha' 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className='icons'></FaLock>
              </div>
              <div className='input-field'>
                <input 
                  type="Password"
                  placeholder='Confirme sua senha'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <FaLock className='icons'></FaLock>
              </div>
              <CheckboxComponent name="Sou um Produtor?" onChange={handleCheckboxChange}/>
              <div className="recall-forget">
              </div>

              <Notification message={success} type='success' onClose={() => setSuccess(null)}/>
              <Notification message={error} type='error' onClose={() => setError(null)}/>

              <div>
                <button type="submit" disabled={loading} className="register-button">
                  {loading ? 'Carregando...' : 'Finalizar Cadastro'}
                </button>
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

