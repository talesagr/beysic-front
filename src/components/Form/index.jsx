import './login.css';

import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(username, password)
    console.log("Envio");
  }
  return (
    <div className='home'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>
          <div className='input-field'>
            <input type="Email" placeholder='Email' onChange={(e) => setUsername(e.target.value)} />
            <FaUser className='icons'></FaUser>
          </div>
          <div className='input-field'>
            <input type="Password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <FaLock className='icons'></FaLock>
          </div>
          <div className="recall-forget">
            <label>
              <input type="Checkbox" />
                Lembrar de mim
            </label>
              <a href="#">Esqueceu a senha ?</a>
          </div>
          <div>
            <button>Entrar</button>
          </div>
          <div className='signup-link'>
            <p>
              Não tem uma conta ? <a href="#">Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </div>

  )
}
export default Index

