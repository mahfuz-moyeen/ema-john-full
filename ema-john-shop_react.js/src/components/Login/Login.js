import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    if (user) {
        navigate(from, { replace: true });
    }

    const handleEmailSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(() => {
                setError('');
            })
            .catch(e => {
                setError(e.message);
            })
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>

                <form onSubmit={handleEmailSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onBlur={handleEmailBlur}
                            type="email"
                            name='email'
                            required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordBlur}
                            type="password"
                            name='password'
                            required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-john? <Link to='/signup' className='form-link'>Create an account</Link>
                </p>
            </div>
        </div >
    );
};

export default Login;