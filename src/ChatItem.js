import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChatItem.css';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import ReactTimeago from 'react-timeago';
import { useDispatch } from 'react-redux';
import { setDisplayTime, selectImage } from './features/appSlice';
import { db } from './firebase';
import { useHistory } from 'react-router-dom';

function ChatItem({id, username, timestamp, read, imageUrl, profilePic, displayTime}) {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const open = () => {
        if (!read) {
            dispatch(selectImage(imageUrl));
            dispatch(setDisplayTime(displayTime));
            db.collection('posts').doc(id).set({
                read: true
            }, 
            {merge: true})
            history.push('/chats/view');
        };        
    }
    return (
        <div onClick={open} className={read ? 'chatItemRead' : 'chatItem'}>
            <Avatar className='chatItem__avatar' src={profilePic} />
            <div className='chatItem__info'>
                <h4>{username}</h4>
                <p>
                    {!read && "Tap to view -"}{" "} 
                    <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
                </p>
            </div>
            {!read && <StopRoundedIcon className='chatItem__readIcon' />}
        </div>
    )
}

export default ChatItem
