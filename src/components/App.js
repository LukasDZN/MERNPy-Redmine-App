import Topbar from "./topbar/Topbar.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import NotFound from "./notFound/NotFound.jsx";
import NotTribeUser from "./notFound/NotTribeUser.jsx";

// Material UI
import Button from '@mui/material/Button';

import "./app.css"

import Chart from "./chart/Chart.jsx";

import ReactDOM from "react-dom";
import { 
    BrowserRouter, 
    Route, 
    Routes,
    Link,
    Navigate
} from "react-router-dom";

import Login from './login/login.jsx';
import { useContext } from "react";

import { myContext } from "./context/Context.jsx";


// Update the announcement sheet (anTaskSheetUpdate)
const anTaskSheetUpdate = async () => {
    try {
        let anTaskSheetUpdateReponse = await fetch('http://localhost:5000/anTaskSheetUpdate', {
            method: 'GET'
        });
        return null;
    } catch (error) {
        console.log(error);
        return null;
    };
};

// Either get data for the first time or refresh redmine task data.
const getAllSupportTasks = async () => {
    try {
        let getAllSupportTasksReponse = await fetch('http://localhost:5000/getAllSupportTasks', {
            method: 'GET'
        });

        // Parse response as JSON (necessary)
        getAllSupportTasksReponse = await getAllSupportTasksReponse.json();
        
        // Iterate through response Objects and  reformat dates from text to date object
        for (let i = 0; i < getAllSupportTasksReponse.length; i++) {
            
            try {
            // Create a new date object
            console.log('Should be string: ' + typeof(getAllSupportTasksReponse[i]['closed_on']))

            let dateReformatted = new Date(getAllSupportTasksReponse[i]['closed_on']); 
            getAllSupportTasksReponse[i]['closed_on'] = dateReformatted;

            console.log('Should be date object: ' + typeof(getAllSupportTasksReponse[i]['closed_on']));
            
            } 
            catch (error) {
                console.log(error);
            }

        };

        // console.log(getAllSupportTasksReponse);

        return getAllSupportTasksReponse;
        
    } catch (error) {
        console.log(error);
        return null;
    };
};

// Either get data for the first time or refresh redmine task data.
const autoBuildRelease = async () => {

    console.log('autoBuildRelease button clicked')
    
    let releaseTaskId = document.getElementById('releaseTaskId').value
    let maxTimeSpent = document.getElementById('maxTimeSpent').value
    console.log(releaseTaskId)
    console.log(maxTimeSpent)
    
    try {
        let response = await fetch(`http://localhost:5000/autoBuildRelease/${releaseTaskId}/${maxTimeSpent}`, {
            method: 'GET'
        });
    }
    catch (error) {
        console.log("error" + error);
    }

    return null
};


//  <Chart/>
  
function App() {

    const userObject = useContext(myContext);

    return (
        <BrowserRouter>
            {/* Input components here in order to render them on every page / route. */}
            <Routes>
                <Route path="/" element={<Topbar />} />
                <Route path="/dashboard" element={<> <div> <Topbar/> <Sidebar/> </div> </>}>
                    <Route path="/dashboard/scripts" element={<Button variant="contained">Contained</Button>} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={() => {window.location.href = "http://localhost:8000/logout";}} />
                <Route path="/notTribeUser" element={<NotTribeUser />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};



export default App;










// CORS solution: ctrl + F this -> Therefore in your back-end, you have to handle th
// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

// fetch guide: https://www.youtube.com/watch?v=cuEtnrL9-H0&t=80s

// All modern web browsers enforce CORS. They prevent JavaScript from obtaining data from a server in a domain different 
// than the domain the website was loaded from, unless the REST API server gives permission.


// Source: https://developer.okta.com/blog/2021/08/02/fix-common-problems-cors

// From a developer’s perspective, CORS is often a cause of much grief when it blocks network requests. 
// CORS provides a number of different mechanisms for limiting JavaScript access to APIs. It is often not obvious which mechanism is blocking the request.

// We now have two servers—the front-end one on http://localhost:8080, and the REST API server on http://localhost:8000. Even though the two servers have the same hostname, 
// the fact that they are listening on different port numbers puts them in different domains from the CORS perspective. The domain of the web content is referred to as the origin.

// The message says that the browser has blocked the request because of a CORS policy. It suggests two solutions. The second suggestion is to change the mode from cors to no-cors 
// in the JavaScript fetch request. This is not an option as the browser always deletes the response data when in no-cors mode to prevent data from being read by an unauthorized client.

// ---

// https://stackoverflow.com/questions/55670206/i-cant-get-data-from-a-public-api-access-control-allow-origin-missing
// Seems like some APIs are intentionally made so that you cannot access them from the client and must use a proxy server (your own back end) in
// order to not expose your API key (which JavaScript cannot hide).
// TL;DR: REST API provider can block you from accessing their API through the browser (because browsers enforce this policy).

// ---

// Source: https://stackoverflow.com/questions/37897523/axios-get-access-to-response-header-fields/37931084#37931084
// In case of CORS requests, browsers can only access the following response headers by default:

// Cache-Control
// Content-Language
// Content-Type
// Expires
// Last-Modified
// Pragma

// ---

// Object methods
// https://www.w3schools.com/js/js_object_methods.asp

// Object properties
// objectName["property"]   // person["age"]

// ---

// Js prototype (when you get a response it has a prototype object attached)
// Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// JavaScript is often described as a prototype-based language — to provide inheritance, 
// objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

// ---

// Either get data for the first time or refresh redmine task data.
// const createRfc = async () => {
//   let createRfcReponse = await fetch('http://localhost:5000/', {
//     method: 'GET'
//   });
// };
  
// Buttons
// <button onClick={getAllSupportTasks} >Refresh Redmine task data</button>
//             <button onClick={anTaskSheetUpdate} >Update the announcement sheet</button>
//            <button onClick={autoBuildRelease} >Auto build release</button>

