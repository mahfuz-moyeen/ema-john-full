import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState(user?.email);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const handleNameBlur = event => {
        setName(event.target.value);
    };

    // const handleEmailBlur = event => {
    //     setEmail(event.target.value);
    // };
    

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    };

    const handlePhoneNOBlur = event => {
        setPhone(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        const shipment = {name,email ,address ,phone}
        console.log(shipment);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping info</h1>

                <form onSubmit={handleFormSubmit}>

                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            onBlur={handleNameBlur}
                            type="text"
                            name='name'
                            required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            // onBlur={handleEmailBlur}
                            type="email"
                            name='email'
                            value={user?.email}
                            readOnly/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input
                            onBlur={handleAddressBlur}
                            type="text" name='address'
                            required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone-no">Phone Number</label>
                        <input
                            onBlur={handlePhoneNOBlur}
                            type="number" name='phone-no' required />
                    </div>
                    {/* <p style={{ color: 'red' }}>{error}</p> */}
                    <input
                        className='form-submit' type="submit"
                        value="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;