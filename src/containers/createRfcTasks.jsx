import React from 'react';
import { useState, useEffect } from "react";

// CSS
import '../layouts/baseLayout.css';

// Components
import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import MyButton from "../components/button/MyButton.jsx";

// MUI imports
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

// API
import createRfcTasks from "../api/createRfcTasks.js";
import createEmergencyReleaseToday from "../api/createEmergencyReleaseToday.js";

/*
-
*/

export default function CreateRfcTasks() {

    const [requestInProgress, setRequestInProgress] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('');
    const [lastUpdatedCounter, setLastUpdatedCounter] = useState(0);

    const [releaseId, setReleaseId] = useState('');
    const [startTime, setStartTime] = useState('');

    // Python response  state
    const [pythonResponse, setPythonResponse] = useState('');

    async function postRfcTasks() {
        try {
            setRequestInProgress(true);
            let createRfcTasksResponse = await createRfcTasks(releaseId, startTime);
            setPythonResponse(createRfcTasksResponse);
            // if (refreshRequest === 'success') {
            //     setRequestInProgress(false);
            // };
            setRequestInProgress(false);
            console.log(releaseId, startTime);
            setLastUpdated(Date.now());
        } catch (error) {
            console.log(error);
            setRequestInProgress(false);
        }
    };

    async function createEmergencyReleaseTodayFunc() {
        try {
            setRequestInProgress(true);
            let createEmergencyReleaseTodayResponse = await createEmergencyReleaseToday();
            setReleaseId(parseInt(JSON.parse(createEmergencyReleaseTodayResponse).issue.id));
            setPythonResponse(createEmergencyReleaseTodayResponse);
            // if (refreshRequest === 'success') {
            //     setRequestInProgress(false);
            // };
            setRequestInProgress(false);
            console.log(releaseId, startTime);
            setLastUpdated(Date.now());
        } catch (error) {
            console.log(error);
            setRequestInProgress(false);
        }
    };

    useEffect(() => {
        const oneTimeFunctionTimer = setTimeout(
            () => {
                if (lastUpdated !== '') {
                    setLastUpdatedCounter(lastUpdatedCounter + 1)
                }
            }, 1e3)
        
        return () => clearTimeout(oneTimeFunctionTimer);

    }, [lastUpdated, lastUpdatedCounter]);

    // -----------------------------------------------
    // Error indicator prop
    let inputPropsReleaseId = {}
    let inputPropsStartTime = {}
    let isDisabled;
    
    // Validate input
    // if ((releaseId.length !== 5 && releaseId !== '') || isNaN(releaseId)) { // isNaN checks if the value is a number
    //     inputPropsReleaseId.error = true;
    //     inputPropsReleaseId.helperText = 'Incorrect value';
    //     isDisabled = true;
    // }
    if ((startTime.length !== 2 && startTime !== '') || isNaN(startTime) || startTime > 23 || startTime < 0) {
        inputPropsStartTime.error = true;
        inputPropsStartTime.helperText = 'Incorrect value';
        isDisabled = true;
    }
    if (releaseId === '' || startTime === '') {
        isDisabled = true;
    }

    return (
        <div className='container'>
            <Topbar />
            <div className='sidebarAndContent'>
                <div className='sidebarFlexLayout'>
                    <Sidebar />
                </div>
                <div className='contentFlexLayout'>
                    {/* Main content goes here */}
                    <h1>Create emergency release</h1>
                    <hr/> 
                    <div>
                        <MyButton
                            disabled={false}
                            buttonFunction={createEmergencyReleaseTodayFunc}
                            buttonText={'Create release'}
                            buttonLoading={requestInProgress === true ? <CircularProgress size={24} color='inherit' /> : ''}
                            lastUpdatedTimestamp={lastUpdated}
                            buttonExplanation={<p>Creates an emergency release with "due date" set as today.</p>}
                        />
                    </div>


                    <h1>Create RFC tasks</h1>
                    <hr/>                    
                    <TextField
                        {...inputPropsReleaseId}
                        required
                        id="releaseIdField"
                        label="Release ID (65149)"
                        value={releaseId}
                        onChange={(event) => setReleaseId(event.target.value)}
                    />
                    <TextField
                        {...inputPropsStartTime}
                        required
                        id="startTimeField"
                        label="Start time (09)"
                        onChange={(event) => setStartTime(event.target.value)}
                    />
                    <div>
                        <MyButton
                            disabled={isDisabled}
                            buttonFunction={postRfcTasks}
                            buttonText={'Create RFC tasks'}
                            buttonLoading={requestInProgress === true ? <CircularProgress size={24} color='inherit' /> : ''}
                            lastUpdatedTimestamp={lastUpdated}
                            buttonExplanation={<p>Creates RFCs for all environments for the specified release ID.</p>}
                        />
                    </div>

                    {/* Python response */}
                    <br></br>
                    <div>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Response: "
                            multiline
                            fullWidth
                            rows={10}
                            // defaultValue="-"
                            // value={JSON.stringify(pythonResponse) === '""' ? '-' : JSON.stringify(pythonResponse)}
                            value={pythonResponse}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
};