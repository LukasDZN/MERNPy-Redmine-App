import "./chart.css"
import { XAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'; // AreaChart, Area, YAxis, CartesianGrid
import getChartData from "./chartData";
import { useState, useEffect } from "react";


export default function Chart() {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        async function setChartDataFunction() {
            let chartResponse = await getChartData()
            setChartData(chartResponse);
        } 
        setChartDataFunction();
    }, []);

    console.log(chartData);

    // let xAxisData = [];
    // let yAxisData = [];

    /*
    // @TODO
      - Think of the best graph to represent the data
      - Should be possible to select increments: day, week, month. -> Day for now
      - Should be possible to select month -> dropdown for year and month. e.g. 2021, December
      - Filter to Select projects (by default - all projects are selected.)
    */

    return (
        <div className="chart">
            <h3 className="chartTitle">Created and closed support tickets (December 2021)</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                {/* <LineChart data={testData}>
                    <XAxis dataKey="name" stroke="#5550bd" fill="#8884d8" />
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    <Tooltip />
                </LineChart> */}
                <LineChart data={chartData}>
                    <XAxis dataKey="title" stroke="#5550bd" fill="#8884d8" />
                    <Line type="monotone" dataKey="tasksCreatedCount" stroke="#1F8910" />
                    <Line type="monotone" dataKey="tasksClosedCount" stroke="#666666" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}