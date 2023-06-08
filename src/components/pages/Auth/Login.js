import React from 'react';
import Bloc_image from './Bloc_image';
import '../../../assets/css/register.css';
import '../../../assets/css/login.css';
import LoginForm from './LoginForm';


function Login() {
    return (
        <>
            <div >
                <main className='auth__block'>
                    <div className="register-blog">
                        <Bloc_image />
                        <LoginForm />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Login