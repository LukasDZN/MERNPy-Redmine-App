import React from 'react'

import './baseLayout.css'

import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";

// Temp
// import MyButton from "../components/button/MyButton.jsx";
import Chart from "../components/chart/Chart.jsx";


export default function BaseLayout({  ContentContainer = " "  }) {
    
    return (
        <div className='container'>
            <Topbar />
            <div className='sidebarAndContent'>
                <div className='sidebarFlexLayout'>
                    <Sidebar />
                </div>
                <div className='contentFlexLayout'>
                    {ContentContainer}
                    <Chart />
                </div>
            </div>

            {/* <div>
                <MyButton buttonText={'test text'}/>
            </div> */}

        </div>
    )
};