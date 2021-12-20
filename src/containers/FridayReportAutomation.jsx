import React from 'react'

// CSS
import '../layouts/baseLayout.css'

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

    const [minutes, setMinutes] = React.useState('');

    const handleChange = (event) => {
        setMinutes(event.target.value);
      };
    
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
                        buttonExplanation={<p>Refreshes the <a href="https://docs.google.com/spreadsheets/d/1UKXN9HOL9_igz1a3Gi72V5bMJdxFEElzilrgJnigYAk/edit#gid=356703711" target="_blank">Friday Automation Sheet</a> data once.</p>}
                    />

                    <hr/>

                    <h3>Refresh loop</h3>

                    <InputLabel>Minutes</InputLabel>
                    <Select
                        label="Every X minutes"
                        onChange={handleChange}
                        defaultValue={180}
                    >
                        <MenuItem value={60}>1</MenuItem>
                        <MenuItem value={180}>3</MenuItem>
                        <MenuItem value={300}>5</MenuItem>
                        <MenuItem value={600}>10</MenuItem>
                    </Select>

                    <MyButton   
                        // buttonFunction={fridayReportAutomationLoop}
                        buttonFunction={randomApi}
                        buttonText={'Refresh data loop'} 
                        buttonExplanation={<p>Refreshes the <a href="https://docs.google.com/spreadsheets/d/1UKXN9HOL9_igz1a3Gi72V5bMJdxFEElzilrgJnigYAk/edit#gid=356703711" target="_blank">Friday Automation Sheet</a> data continuously for the given time interval in minutes.</p>}
                    /> 


                </div>
            </div>
        </div>
    )
};