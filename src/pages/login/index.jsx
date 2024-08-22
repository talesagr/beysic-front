import Navbar from '../../components/Navbar'
import Form from '../../components/Form/index'
import './login.css'

export default function Login() {
    return(
        <>
            <Navbar/>
            <body className='login-body'>
                <Form/>
            </body>
        </>
    )
}
