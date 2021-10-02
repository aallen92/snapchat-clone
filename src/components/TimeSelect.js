import React, { useState } from 'react';
import './componentStyles/TimeSelect.css';
import TimerIcon from '@material-ui/icons/Timer'
import { useDispatch } from 'react-redux';
import { setDisplayLength, setDisplayTimeSet } from '../features/previewSlice';

function TimeSelect() {
    const [selectedTime, setSelectedTime] = useState(10);
    const dispatch = useDispatch();

    const setTime = () => {
        dispatch(setDisplayLength(selectedTime));
        dispatch(setDisplayTimeSet(false));
    }
    return (
        <div className='timeSelect'>
            <TimerIcon 
                className='timeSelect__timerIcon'
            />
            <p className='timeSelect__time'>
            {selectedTime}
            </p>
            <input type='range' value={selectedTime} min={5} max={30} onChange={(e) => setSelectedTime(e.target.value)}/>
            <button 
                className='timeSelect__setButton'
                onClick={setTime}
            >
                Set Time
            </button>
        </div>
    )
}

export default TimeSelect
