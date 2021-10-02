import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatItem from './ChatItem';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { auth, db } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import { useHistory } from 'react-router-dom';
import { resetCameraImage } from './features/cameraSlice';


function Chat() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const takeSnap = () => {
        dispatch(resetCameraImage());
        history.push('/');
    }

    const goAccount = () => {
        history.push('/account');
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar 
                    src={user.profilePic} 
                    onClick={() => auth.signOut()} 
                    className='chat__avatar' 
                />
                <div className='chat__search'>
                    <SearchIcon className='chat__searchIcon' />
                    <input placeholder='Friends' type='text' />
                </div>
                <ChatBubbleIcon className='chat__chatIcon' />
            </div>
            <div className='chat__posts'>
                {posts.map(({id, data: { profilePic, username, timestamp, imageUrl, read, displayTime }}) => (
                    <ChatItem
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                        displayTime={displayTime}
                    />
                ))}
            </div>
            <RadioButtonUncheckedIcon
                className='chat__takePicIcon'
                onClick={takeSnap}
                fontSize='large'
            />
        </div>
    )
}

export default Chat
