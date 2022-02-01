import './myButton.css';
import React from 'react'
import Button from '@mui/material/Button';
import timeSince from '../../api/helperFunctions/timeSince.js';

export default function MyButton({buttonFunction, buttonText, buttonExplanation, buttonLoading='', lastUpdatedTimestamp='', disabled=false}) {

    return (
        <div className='buttonAndExplainerContainer'>
            <div className="buttonContainer">
                <Button
                    disabled={disabled}
                    onClick={buttonFunction}
                    variant="contained"
                    >{buttonText}&nbsp;{buttonLoading}
                </Button>
                <div style={{color: 'gray', fontSize: '11px', paddingTop: '8px', paddingLeft: '6px'}}>
                    {lastUpdatedTimestamp !== '' ? 'Last updated: ' + timeSince(lastUpdatedTimestamp) + ' ago' : ''} 
                </div>
            </div>
            <div className='buttonExplainer'>
                {buttonExplanation}
            </div>
        </div>
    );
};