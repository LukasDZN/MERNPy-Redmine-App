import "./chart.css"
import { XAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'; // AreaChart, Area, YAxis, CartesianGrid

export default function Chart() {

    const data = [
        {
          name: 'Page A',
          "Active User": 4000
        },
        {
          name: 'Page B',
          "Active User": 3000
        },
        {
          name: 'Page C',
          "Active User": 2000
        },
        {
          name: 'Page D',
          "Active User": 2780
        },
        {
          name: 'Page E',
          "Active User": 1890
        },
        {
          name: 'Page F',
          "Active User": 2390
        },
        {
          name: 'Page G',
          "Active User": 3490
        },
      ];

      const realData = {
        "52923": {
            "status": "Closed",
            "priority": "High",
            "author": "Catherine  Jones",
            "assigned_to": "Amanda Jakubaviciute",
            "created_on": "2021-03-25T11:16:19Z",
            "closed_on": "2021-09-02T09:35:03Z",
            "support_type": "Misc",
            "support_product": "ISAC-ISS",
            "support_environment": "-NONE-",
            "customer": "-INTERNAL-"
        },
        "54777": {
            "status": "New",
            "priority": "High",
            "author": "Doina Pantaz",
            "assigned_to": "",
            "created_on": "2021-05-20T09:19:53Z",
            "closed_on": null,
            "support_type": "Change request",
            "support_product": "ISAC-ISS",
            "support_environment": "LIVE",
            "customer": "Tradecore"
        },
        "56115": {
            "status": "Closed",
            "priority": "Urgent",
            "author": "Alice Gordon",
            "assigned_to": "Amanda Jakubaviciute",
            "created_on": "2021-07-07T08:50:57Z",
            "closed_on": "2021-08-25T08:47:51Z",
            "support_type": "Misc",
            "support_product": "ISAC-ISS",
            "support_environment": "SANDBOX",
            "customer": "Financial House"
        },
        "56384": {
            "status": "Closed",
            "priority": "Urgent",
            "author": "Doina Pantaz",
            "assigned_to": "Amanda Jakubaviciute",
            "created_on": "2021-07-15T11:36:47Z",
            "closed_on": "2021-11-02T07:25:52Z",
            "support_type": "Change request",
            "support_product": "ISAC-ISS",
            "support_environment": "SANDBOX",
            "customer": "Financial House"
        },
        "56660": {
            "status": "Closed",
            "priority": "Urgent",
            "author": "Amanda Jakubaviciute",
            "assigned_to": "Amanda Jakubaviciute",
            "created_on": "2021-07-23T12:47:47Z",
            "closed_on": "2021-09-11T02:43:56Z",
            "support_type": "Issue",
            "support_product": "ISAC-ISS",
            "support_environment": "LIVE",
            "customer": "Lerex"
        },
        "56661": {
            "status": "Closed",
            "priority": "Normal",
            "author": "Amanda Jakubaviciute",
            "assigned_to": "Amanda Jakubaviciute",
            "created_on": "2021-07-23T12:52:32Z",
            "closed_on": "2021-07-29T10:41:26Z",
            "support_type": "Access request",
            "support_product": "ISAC-ISS",
            "support_environment": "SANDBOX",
            "customer": "-INTERNAL-"
        },
        "56713": {
            "status": "Closed",
            "priority": "Immediate",
            "author": "Dan Cazac",
            "assigned_to": "Violeta Tamasauskiene",
            "created_on": "2021-07-26T12:19:58Z",
            "closed_on": "2021-10-11T12:08:19Z",
            "support_type": "Change request",
            "support_product": "ISAC-ISS",
            "support_environment": "LIVE",
            "customer": "eToro"
        },
        "56721": {
            "status": "Closed",
            "priority": "Urgent",
            "author": "Justas Turonis",
            "assigned_to": "Lukas Dzenkauskas",
            "created_on": "2021-07-26T14:50:17Z",
            "closed_on": "2021-07-27T07:12:46Z",
            "support_type": "Change request",
            "support_product": "ISAC-ISS",
            "support_environment": "LIVE",
            "customer": "eToro"
        },
        "56723": {
            "status": "Closed",
            "priority": "High",
            "author": "Rustam Idrisov",
            "assigned_to": "Amanda Jakubaviciute",
            "created_on": "2021-07-27T03:10:23Z",
            "closed_on": "2021-08-26T12:08:01Z",
            "support_type": "Issue",
            "support_product": "ISAC-3DS-ACS",
            "support_environment": "LIVE",
            "customer": "Paytend"
        }
    };


    // --- Theoretical plan: ---
    // const realData = {  
    //     "56723": {
    //               "status": "Closed",
    //               "priority": "High",
    //               "author": "Rustam Idrisov",
    //               "assigned_to": "Amanda Jakubaviciute",
    //               "created_on": "2021-07-27T03:10:23Z",
    //               "closed_on": "2021-08-26T12:08:01Z",
    //               "support_type": "Issue",
    //               "support_product": "ISAC-3DS-ACS",
    //               "support_environment": "LIVE",
    //               "customer": "Paytend"
    //      },
    //     ...
    //   }
      
    //   let dateAndCountDict = {
    //     2021-07-25: 0,
    //     2021-07-26: 0,
    //     2021-07-27: 0,
    //     2021-07-28: 0,
    //     2021-07-29: 0,
    //     2021-07-30: 0
    //   }
      
    //   for task in realData:
    //     try
    //       dateAndCountDict[task.created_on] = dateAndCountDict[task.created_on] + 1
      
    //   var createdDateTime = new Date('2021-03-25T11:16:19Z');

    let xAxisData = [];
    // let yAxisData = [];


    for (let taskKey in realData) {
        // Create a date variable from the date string, also remove the hours, minutes, seconds, etc.
        var createdDateTime = new Date(realData[taskKey].created_on.slice(0, 10));
        xAxisData.push(createdDateTime);
      };
      console.log(xAxisData);
      
      const counts = {};
      xAxisData.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });


    return (
        <div className="chart">
            <h3 className="chartTitle">Custom chart</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" fill="#8884d8" />
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
