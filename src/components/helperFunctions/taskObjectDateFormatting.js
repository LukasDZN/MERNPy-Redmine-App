// /*
//     Takes in a task object, extracts 
// */
// function taskObjectDateFormatting(object) {

// };

let startDate = new Date(req.body.startDate);
let endDate = new Date(req.body.endDate);

// When selecting a field, it should then show a list to select from for that 
// particular field. E.g. when priority is chosen, a dropdown list should be
// shown with the options of Immediate, Urgent, High, etc.
let selectedFieldType = req.body.selectedFieldType;
let selectedFieldValue = req.body.selectedFieldValue;

for (let i = 0; i < taskArray.length; i++) {

    // if (taskArray[i]._id === req.body.id) {
        
    // };

};


// --- Testing ----------------------------------------------------------------

// Test data

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
    }
};

// Test scenarios

// Scenario #1 

// 3 out of 5 tasks were closed during the period specified below (no other criteria specified)
// let startDate = new Date(2021, 8, 1);
// let endDate = new Date(2021, 9, 15);




// // export { taskObjectDateFormatting };