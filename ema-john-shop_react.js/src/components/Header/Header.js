import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-link'>

                <CustomLink to='/' className='link-title'>Shop</CustomLink>
                <CustomLink to='/orders' className='link-title'>Orders</CustomLink>
                <CustomLink to='/inventory' className='link-title'>Inventory</CustomLink>

                {
                    user?.uid
                    &&
                    <CustomLink
                        to='/shipment' className='link-title'
                    >Shipment</CustomLink>
                }

                <CustomLink to='/about' className='link-title'>About</CustomLink>
                {/* {user?.uid && <p className='user'>{user.email}</p>} */}
                {
                    user?.uid ?
                        <div className='user-logout'>
                            <p className='user'>{user.email}</p>
                            <button onClick={handleSignOut} className='link-title'>Logout</button>
                        </div>

                        :
                        <CustomLink to='/login' className='link-title'>Login</CustomLink>
                }

            </div>
        </nav>
    );
};

export default Header;