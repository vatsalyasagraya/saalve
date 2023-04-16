import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignInPage() {
    return (
        <div className="text-center m-5-auto sign-up">
            <h3>Sign in to us</h3>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p className='loginnn'>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time?   <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}

export default SignInPage;
