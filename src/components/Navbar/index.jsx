import "./navbar.css"

const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <div className={"left"}>
                <h1 id={"logo"}>B</h1>
                <h1>Beysic</h1>
            </div>
            <div className={"right"}>
                    <button>Ingressos</button>
                    <button>Eventos</button>
                    <button>Agenda</button>
                    <button>Contato</button>
                <div className={"auth"}>
                    <button id={'login'}>Login</button>
                    <button id={'register'}>Registrar</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar