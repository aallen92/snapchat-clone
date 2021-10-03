import React, { useEffect, useState } from 'react';
import './componentStyles/Menu.css';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useHistory } from 'react-router-dom';

function Menu({active}) {
    const [mapActive, setMapActive] = useState(false);
    const [chatActive, setChatActive] = useState(false);
    const [cameraActive, setCameraActive] = useState(false);
    const [storiesActive, setStoriesActive] = useState(false);
    const [spotlightActive, setSpotlightActive] = useState(false);

    const history = useHistory();

    const goChat = () => {
        history.push('/chats');
    }

    const goCamera = () => {
        history.push('/');
    }

    useEffect(() => {
        if (active === 1) {
            setMapActive(true);
        }
        if (active === 2) {
            setChatActive(true);
        }
        if (active === 3) {
            setCameraActive(true);
        }
    },[active])

    return (
        <div className='menu'>
            <div className='menu__item'>
                <RoomOutlinedIcon />
                <p>
                    Map
                </p>
            </div>
            <div 
                className={chatActive ? 'menu__activeItem' : 'menu__item'}
                onClick={goChat}    
            >
                <ModeCommentOutlinedIcon />
                <p>
                    Chat
                </p>
            </div>
            <div 
                className={cameraActive ? 'menu__activeItem' : 'menu__item'}
                onClick={goCamera}    
            >
                <ControlCameraOutlinedIcon />
                <p>
                    Camera
                </p>
            </div>
            <div className='menu__item'>
                <NaturePeopleOutlinedIcon />
                <p>
                    Stories
                </p>
            </div>
            <div className='menu__item'>
                <LightModeOutlinedIcon />
                <p>
                    Spotlight
                </p>
            </div>
        </div>
    )
}

export default Menu
