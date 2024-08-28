import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <div className={"left"}>
                <h1 id={"logo"}>B</h1>
                <h1>Beysic</h1>
            </div>
            <div className={"right"}>
                    <button>Ingressos</button>
                    <Link to ="/">
                    <button>Eventos</button>
                    </Link>
                    <button>Agenda</button>
                    <button>Contato</button>
                <div className={"auth"}>
                    <Link to = "/Login">  
                    <button id={'login'}>Login</button>
                    </Link>
                    <Link to = "/Register"> 
                    <button id={'register'}>Registrar</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar