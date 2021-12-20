import './myButton.css';
import React from 'react'
import Button from '@mui/material/Button';

// import LoadingButton from '@mui/lab/LoadingButton';

export default function MyButton({buttonFunction, buttonText, buttonExplanation}) {

    return (
        <div className='buttonAndExplainerContainer'>
            <div className="buttonContainer">
                <Button
                    onClick={buttonFunction}
                    variant="contained"
                    >{buttonText}
                </Button>
            </div>
            <div className='buttonExplainer'>
                {buttonExplanation}
            </div>
        </div>
    );
};