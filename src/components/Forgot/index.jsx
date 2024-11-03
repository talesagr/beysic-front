import './forgot.css';

import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [username, setUsername] = useState("");


  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(username)
    console.log("Envio");
  }
  return (
    <div className='home'>
      <div className="container fade-in">
        <form onSubmit={handleSubmit}>
          <h1>Recuperar Acesso</h1>
          <div className='input-field'>
            <input type="Email" placeholder='Email' onChange={(e) => setUsername(e.target.value)} />
            <FaUser className='icons'></FaUser>
          </div>
          <div className="recall-forget">
          </div>
          <div>
            <button>Enviar código</button>
          </div>
          <div className='signup-link'>
            <p>
                Voltar ao Login: <a href="#"><Link to = "/Login"> Login </Link></a>
            </p>
          </div>
        </form>
      </div>
    </div>

  )
}
export default Index
