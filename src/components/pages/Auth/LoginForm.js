import React from 'react';
import App_Store_Badge from '../../../assets/img/App Store Badge.png';
import Google_Play_Badge from '../../../assets/img/Google Play Badge.png';
import google from '../../../assets/img/google.svg';
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <>
            <div className="auth-form">
                <form action="">
                    <h1>Login</h1>
                    <h2>For sell, buy, rent and exchange in one clic.</h2>
                    <div className="bloc-field">
                        <label for="">User name</label><br />
                        <input type="text" className="text-field" />
                    </div>

                    <div className="bloc-field">
                        <label for="">password</label><br />
                        <input type="password" className="text-field" />
                    </div>

                    <div className="bloc-field">
                        <input type="checkbox" id="remember" name="remember" value="true" className="checkbox" />
                        <label for="remember">Remember me</label>
                        <Link to="" className="forgot-password">Forgot Password</Link>
                    </div>
                    <div className="btn-register">
                        <input type="submit" value="Login" className="regist-submit" />
                        <button className="google-regist"><img src={google} alt="Google" />Login with google</button>
                    </div>
                </form>
                <div className="are-login"><p>Don't have an account ? <Link to="register">Create account</Link></p></div>
                <div className="reg-share">
                    <div className="get-in-play-store">
                        <Link to=""><img src={App_Store_Badge} alt="img" /></Link>

                    </div>
                    <div className="get-in-appple">
                        <Link to=""><img src={Google_Play_Badge} alt="img" /></Link>

                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginForm