import React from 'react';
import { useState, useEffect } from "react";

// CSS
import '../layouts/baseLayout.css';

// Components
import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import MyButton from "../components/button/MyButton.jsx";

// MUI imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// API
import fridayReportAutomation from "../api/fridayReportAutomation.js";
import fridayReportAutomationLoop from '../api/fridayReportAutomationLoop.js';

// Temp testing
import randomApi from '../api/randomApi.js';

export default function FridayReportAutomation() {

    // Refresh frequency state
    const [minutes, setMinutes] = useState(180);

    // A button function to start the ticket (and the API call function indirectly)
    function startRequests() {
        // Turn the repeated API requests on and off
        if (ticking === true) {
            setTicking(false);
        } 
        else if (ticking === false) {
            setTicking(true);
        };
    };

    // Define ticker and count states
    const [ticking, setTicking] = useState(false),
    [count, setCount] = useState(0)

    useEffect(() => {
        // Setting the timer to tick every second
        const timer = setTimeout(() => ticking && setCount(count+1), 1e3)
        // If the timer is equal to the specified period - call the API
        if (count % minutes == 0 && ticking == true) { randomApi() }
        console.log('COUNT: ' + count + " | MINUTES: " + minutes);
        return () => clearTimeout(timer)
    }) // adding [] makes it not work.

    
    return (
        <div className='container'>
            <Topbar />
            <div className='sidebarAndContent'>
                <div className='sidebarFlexLayout'>
                    <Sidebar />
                </div>
                <div className='contentFlexLayout'>
                    {/* Main content goes here */}

                    <h1>Friday report automation</h1>

                    <hr/>

                    <h3>One-time refresh</h3>

                    <MyButton   
                        buttonFunction={fridayReportAutomation}
                        buttonText={'Refresh data'} 
                        buttonExplanation={<p>Refreshes the <a href="https://docs.google.com/spreadsheets/d/1UKXN9HOL9_igz1a3Gi72V5bMJdxFEElzilrgJnigYAk/edit#gid=356703711" target="_blank" rel="noreferrer">Friday Automation Sheet</a> data once.</p>}
                    />

                    <hr/>

                    <h3>Refresh loop</h3>

                    <InputLabel>Every X Minutes</InputLabel>
                    <Select
                        defaultValue={180}
                    >
                        <MenuItem onClick={() => setMinutes(60)} value={60}>1</MenuItem>
                        <MenuItem onClick={() => setMinutes(180)} value={180}>3</MenuItem>
                        <MenuItem onClick={() => setMinutes(300)} value={300}>5</MenuItem>
                        <MenuItem onClick={() => setMinutes(600)} value={600}>10</MenuItem>
                    </Select>

                    <MyButton   
                        // buttonFunction={fridayReportAutomationLoop}
                        buttonFunction={startRequests}
                        buttonText={'Refresh data loop'} 
                        buttonExplanation={<p>Refreshes the <a href="https://docs.google.com/spreadsheets/d/1UKXN9HOL9_igz1a3Gi72V5bMJdxFEElzilrgJnigYAk/edit#gid=356703711" target="_blank" rel="noreferrer">Friday Automation Sheet</a> data continuously for the given time interval in minutes.</p>}
                    /> 


                </div>
            </div>
        </div>
    )
};