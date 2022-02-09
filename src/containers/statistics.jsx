import React from 'react'
import { useState, useEffect } from "react";

// CSS
import '../layouts/baseLayout.css'

// Components
import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import MyButton from "../components/button/MyButton.jsx";
import Chart from "../components/chart/Chart.jsx";

// MUI imports
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

/**
 * 
 * @param {String} 
 */
export default function Statistics() {

    const [requestInProgress, setRequestInProgress] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('');
    const [lastUpdatedCounter, setLastUpdatedCounter] = useState(0);

    // Python response  state
    const [pythonResponse, setPythonResponse] = useState('');

    async function requestFunction(createOrUpdate) {
        setRequestInProgress(true);
        // if (createOrUpdate === 'create') {
        //     let createRfcTasksResponse = await createAnnouncementTasks();
        //     setPythonResponse(createRfcTasksResponse);
        // } else if (createOrUpdate === 'update') {
        //     let updateRfcTasksResponse = await updateAnnouncementTasks();
        //     setPythonResponse(updateRfcTasksResponse);
        // }
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
                    <h1>Support task statistics</h1>
                    <hr/>                    

                    <div>
                        <MyButton
                            buttonFunction={() => requestFunction("create")}
                            buttonText={'Refresh data'}
                            buttonLoading={requestInProgress === true ? <CircularProgress size={24} color='inherit' /> : ''}
                            lastUpdatedTimestamp={lastUpdated}
                            buttonExplanation={<p>Refresh internal server DB using Redmine task and journal data.</p>}
                        />
                    </div>

                    {/* The chart */}
                    <div>
                        <Chart />
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