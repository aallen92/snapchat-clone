import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectSelectedImage, resetImage } from './features/appSlice';
import './ChatView.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
 

function ChatView() {
    const selectedImage = useSelector(selectSelectedImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!selectedImage) {
            history.replace('/chats')
        }
    }, [selectedImage, history]);

    const exit = () => {
        dispatch(resetImage());
    }

    return (
        <div className='chatView'>
            <img src={selectedImage} onClick={exit} alt='' />
            <div className='chatView__timer'>
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    strokeWidth={6}
                    size={50}
                    colors={[
                        ["#004777", 0.33],
                        ["#F7B801", 0.33],
                        ["#A30000", 0.33],
                    ]}
                >
                    {({remainingTime}) => {
                        if(remainingTime === 0) {
                            exit();
                        }
                        return remainingTime;
                    }}
                </CountdownCircleTimer>
            </div>
        </div>
    );
}

export default ChatView
