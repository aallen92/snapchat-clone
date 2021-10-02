import React from 'react';
import { useSelector } from 'react-redux';
import './Account.css';
import { selectUser } from './features/appSlice';
import { auth } from './firebase';

function Account() {
    const user = useSelector(selectUser);
    
    return (
        <div className='account'>
            <div className='account__info'>
                <h1>
                    Account Settings
                </h1>
                <p>
                    Welcome {user.username}
                </p>
            </div>
            <button
                className='account__signOutButton'
                onClick={() => auth.signOut()}
            >
                Sign Out
            </button>
        </div>
    )
}

export default Account
