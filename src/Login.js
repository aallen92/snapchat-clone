import React from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { login } from './features/appSlice';
import { auth, provider } from "./firebase";

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(
                login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.uid,
                })
            )
        })
    };

    return (
        <div className='login'>
            <div className='login__container'>
                <button className='login__signInButton' onClick={signIn}>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Login
