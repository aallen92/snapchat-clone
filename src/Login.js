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
                <img
                className='login__logo'
                src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
                alt=""
                />
                <button className='login__signInButton' onClick={signIn}>
                    Log In
                </button>
                <button className='login__signUpButton'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Login
