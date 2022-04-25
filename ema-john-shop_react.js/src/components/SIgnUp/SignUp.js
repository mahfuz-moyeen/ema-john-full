import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    };
    
    if(user){
        navigate('/');
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('your two password do not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }
        else {
            createUserWithEmailAndPassword(email, password)
            setError('')
        }
 
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>

                <form onSubmit={handleFormSubmit}>
                    {/* <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div> */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onBlur={handleEmailBlur} type="email"
                            name='email'
                            required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordBlur}
                            type="password" name='password'
                            required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            onBlur={handleConfirmPasswordBlur}
                            type="password" name='confirm-password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input
                        className='form-submit' type="submit"
                        value="Sign Up" />
                </form>
                <p>
                    already have an account ? <Link to='/login' className='form-link'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;