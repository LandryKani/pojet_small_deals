import React from 'react';
import Bloc_image from './Bloc_image';
import '../../../assets/css/register.css';
import RegisterForm from './RegisterForm';



function Register() {

    return (
        <>
            <div >

                <main className='auth__block'>

                    <div className="register-blog">
                        <Bloc_image />
                        <RegisterForm />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Register