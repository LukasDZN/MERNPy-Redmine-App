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
import createAnnouncementTasks from "../api/createAnnouncementTasks.js";
import updateAnnouncementTasks from "../api/updateAnnouncementTasks.js";

/*
-
*/
export default function SchemeAnnouncements() {

    const [requestInProgress, setRequestInProgress] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('');
    const [lastUpdatedCounter, setLastUpdatedCounter] = useState(0);

    // Python response  state
    const [pythonResponse, setPythonResponse] = useState('');

    async function requestFunction(createOrUpdate) {
        setRequestInProgress(true);
        if (createOrUpdate === 'create') {
            let createRfcTasksResponse = await createAnnouncementTasks();
            setPythonResponse(createRfcTasksResponse);
        } else if (createOrUpdate === 'update') {
            let updateRfcTasksResponse = await updateAnnouncementTasks();
            setPythonResponse(updateRfcTasksResponse);
        }
        setRequestInProgress(false);
        setLastUpdated(Date.now());
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

    return (
        <div className='container'>
            <Topbar />
            <div className='sidebarAndContent'>
                <div className='sidebarFlexLayout'>
                    <Sidebar />
                </div>
                <div className='contentFlexLayout'>
                    {/* Main content goes here */}
                    <h1>Create and update announcement tasks</h1>
                    <hr/>                    

                    <div>
                        <MyButton
                            buttonFunction={() => requestFunction("create")}
                            buttonText={'Create AN tasks'}
                            buttonLoading={requestInProgress === true ? <CircularProgress size={24} color='inherit' /> : ''}
                            lastUpdatedTimestamp={lastUpdated}
                            buttonExplanation={<p>Creates announcement tasks in Redmine by taking the announcements with the "Create task (auto)" status and using the columns in the <a href="https://docs.google.com/spreadsheets/d/14nM76fwtFvUzr2-hodo402XNK3fGS-loPU9l3JZ2_Qo/edit?usp=sharing" target="_blank" rel="noreferrer">google sheet</a> to populate the Redmine task description.</p>}
                        />
                    </div>

                    <div>
                        <MyButton
                            buttonFunction={() => requestFunction("update")}
                            buttonText={'Update AN tasks'}
                            buttonLoading={requestInProgress === true ? <CircularProgress size={24} color='inherit' /> : ''}
                            lastUpdatedTimestamp={lastUpdated}
                            buttonExplanation={<p>Updates announcement task status in the <a href="https://docs.google.com/spreadsheets/d/14nM76fwtFvUzr2-hodo402XNK3fGS-loPU9l3JZ2_Qo/edit?usp=sharing" target="_blank" rel="noreferrer">google sheet</a> by taking their current statuses from Redmine.</p>}
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
                            defaultValue="-"
                            value={pythonResponse}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
};