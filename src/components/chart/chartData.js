import getAllSupportTasks from '../../api/getAllSupportTasks.js';

const testData = {
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
    },
    "56578": {
        "status": "Closed",
        "priority": "High",
        "author": "Rustam Idrisov",
        "assigned_to": "Amanda Jakubaviciute",
        "created_on": "2021-07-27T03:15:23Z",
        "closed_on": "2021-08-26T12:08:01Z",
        "support_type": "Issue",
        "support_product": "ISAC-3DS-ACS",
        "support_environment": "SANBOX",
        "customer": "Paytend"
    },
    "56953": {
        "status": "Closed",
        "priority": "High",
        "author": "Rustam Idrisov",
        "assigned_to": "Amanda Jakubaviciute",
        "created_on": "2021-07-27T03:11:23Z",
        "closed_on": "2021-08-26T12:08:01Z",
        "support_type": "Issue",
        "support_product": "ISAC-3DS-ACS",
        "support_environment": "LIVE",
        "customer": "Paytend"
    }
};
// Total entry count: 11

// Expected output:
// There should be 3 lists -> for date, week and month
// const exampleDayOutput = [
//     {
        // "name": 2021-12-2,
        // "tasksCreatedCount": 5,
        // "tasksClosedCount": 1
//     },
//     ...
// ];

// const exampleWeekOutput = [
//     {
//         "name": '2021-07-w1',
//         "tasksCreated": 23,
//         "tasksClosed": 3
//     },
//     {
//         "name": '2021-07-w2',
//         "tasksCreated": 31,
//         "tasksClosed": 9
//     }
// ];

// @TODO
/*
// 1. Create a list of weeks (week of the year)
  - It should be easy to choose between date, week and month:
    - date --> easiest to do, and compatible with others -> implement this.
    - week (week number of the year)
    - month (january, february, ...)
// 2. Check if a created_date falls within the range of the week
// 3. If it does, add it to the appropriate week (skip if null)

// try to filter out fields, for example, "assigned_to": "Amanda Jakubaviciute". 
// Function should receive: (fieldName, fieldValue) -> filter them out from an array
*/

export default async function getChartData() {
    // Get data to process from the server
    let ResponseData = await getAllSupportTasks();
    // let data = testData // for @testing

    /**
     * @param {int} The month number, 0 based
     * @param {int} The year, not zero based, required to account for leap years
     * @return {Date[]} List with date objects for each day of the month
     */
    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1, 23);
        var days = [];
        while (date.getMonth() === month) {
            let createdOnYear = date.getFullYear();
            let createdOnMonth = date.getMonth() + 1;
            let createdOnDay = date.getDate();
            let fullDate = createdOnYear + '-' + createdOnMonth + '-' + createdOnDay;
            days.push(fullDate);
            date.setDate(date.getDate() + 1);
        }
        return days;
    }
    let daysInMonth = getDaysInMonth(11, 2021) // December
    // console.log(daysInMonth);

    // // Exercise - count all of the tickets with 'High' priority
    // let count = 0

    // for (let key in testData) {
    //     if (testData[key].priority === 'High') {
    //         // console.log(testData[key]);
    //         count += 1;
    //     }
    // }
    // // console.log(count);

    // List of all dates in a month and their counts
    let dayCountArray = [];
    // Populate the array with objects
    for (let dateIndex in daysInMonth) {
        let newDateObject = {
            "name": daysInMonth[dateIndex],
            'title': daysInMonth[dateIndex].slice(8),
            "tasksCreatedCount": 0,
            "tasksClosedCount": 0
        }
        dayCountArray.push(newDateObject);
    }

    function addCount(data) {
        for (let key in data) {
            try {
                /**
                 * @param {string} "created_on" or "closed_on"
                 */
                function dateField(fieldName) {
                    // Read the day from the redmine ticket
                    let createdOnString = data[key][fieldName]
                    let createdOnDate = new Date(createdOnString);
                    let createdOnYear = createdOnDate.getFullYear();
                    let createdOnMonth = createdOnDate.getMonth() + 1;
                    let createdOnDay = createdOnDate.getDate();
                    let fullDate = createdOnYear + '-' + createdOnMonth + '-' + createdOnDay;

                    // Check if date exists in the array so that it can be updated
                    // Source: https://stackoverflow.com/questions/22844560/check-if-object-value-exists-within-a-javascript-array-of-objects-and-if-not-add/22844712
                    const checkIfValueExists = obj => obj.name === fullDate;
                    let nameExists = dayCountArray.some(checkIfValueExists);

                    // else if date exists in array, add 1 to the count
                    if (nameExists) {
                        dayCountArray.forEach(function (item) {
                            if (item.name === fullDate) {
                                if (fieldName === 'created_on') {
                                    item.tasksCreatedCount += 1;
                                } else if (fieldName === 'closed_on') {
                                    item.tasksClosedCount += 1;
                                }
                            }
                        });
                    }
                }
                dateField('created_on');
                dateField('closed_on');

                // if (createdOnDay === 'High') {
                //     // console.log(data[key]);
                //     count += 1;
                // }
            } catch (error) {
                console.log(error);
            }
        }
    }
    addCount(ResponseData)
    return dayCountArray;
}