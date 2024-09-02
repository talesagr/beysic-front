import './login.css';

import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({onSubmit, error, loading}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({login, password});
  }
  return (
      <div className='home'>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>

            <div className='input-field'>
              <input
                  type="Email"
                  placeholder='Email'
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  required
              />
              <FaUser className='icons'/>
            </div>

            <div className='input-field'>
              <input
                  type="Password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              <FaLock className='icons'/>
            </div>

            <div className="recall-forget">
              <label>
                <input type="Checkbox"/>
                Lembrar de mim

              </label>
              <a href="#">Esqueceu a senha ?</a>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div>
              <button type="submit" disabled={loading} className="login-button">
                {loading ? 'Carregando...' : 'Entrar'}
              </button>
            </div>

            <div className='signup-link'>
              <p>
                Não tem uma conta? <Link to="/Register">Registrar</Link>
              </p>
            </div>
          </form>
        </div>

      </div>

  )
}
export default LoginForm
