// --- Imports --------------------------------------------------------------------------

// Global CSS
import './app.css';

// API
import redirectMiddleware from '../api/redirectMiddleware.js';

// Containers
import NotFound from "../containers/NotFound.jsx";
import NotTribeUser from "../containers/NotTribeUser.jsx";

import Login from '../containers/Login.jsx';
import Logout from '../containers/Logout.jsx';

import FridayReportAutomation from '../containers/FridayReportAutomation.jsx';
import CreateRfcTasks from '../containers/createRfcTasks.jsx';
import SchemeAnnouncements from '../containers/SchemeAnnouncements.jsx';
import Statistics from '../containers/Statistics.jsx';

// Router tools
import { 
    BrowserRouter, 
    Route, 
    Routes,
    useNavigate,
} from "react-router-dom";

// React Hooks
// import { useContext } from "react";
// import { myContext } from "./context/Context.jsx";
import { useEffect } from 'react';

// External libraries - Chart
// import Chart from "./chart/Chart.jsx";

// Temp testing
// import BaseLayout from "../layouts/BaseLayout.jsx";

// ENV variables
import config from './config.js';

// Redirect to the main page function (component)
function RedirectToMainPage() {
    let navigate = useNavigate();
    useEffect (() => {
        return navigate('/fridayReportAutomation')
    })
    return null;
}

// --- App -------------------------------------------------------------------------------
  
function App() {

    // NOTE: When hosting the server locally, must use App on port 3000 with production mode + server npm run dev.
    // Because static compiled App files are made to serve the production URL.

    // const userObject = useContext(myContext);

    // Check whether the user is already logged in or not
    async function checkIsAuthenticated() {

        try {
            // Send a request to check if the user is already logged in
            // let logoutResponse = await fetch(config().BACKEND_DOMAIN + '/checkIsAuthenticated', {
            let logoutResponse = await fetch(config().BACKEND_DOMAIN + config().BACKEND_PORT + '/api/checkIsAuthenticated', {
                method: 'GET',
                credentials: 'include'
            });

            let jsonResponse = await logoutResponse.json();

            // If current route is not /login and the user IS NOT logged in, redirect to /login
            if (window.location.pathname !== '/login' && window.location.pathname !== '/notTribeUser') {
                try {
                    redirectMiddleware(jsonResponse);
                } catch (error) {
                    console.log(error);
                };
            // If current route is /login and the user IS logged in, redirect to /fridayReportAutomation
            } 
            else if (window.location.pathname === '/login' && jsonResponse.authenticationStatus === "user is authenticated") {
                try {
                    redirectMiddleware( {'redirectUrl':'/fridayReportAutomation'} );
                } catch (error) {
                    console.log(error);
                };
            }
        }
        // If an error during fetching occurs, log the error and redirect to the login page
        catch (error) {
            console.log(error);
            // redirectMiddleware( {'redirectUrl':'/login'} ); // could add time interval to refresh every X seconds.
        }

    };

    checkIsAuthenticated();

    return (
        
        <BrowserRouter>
            {/* Input components here in order to render them on every page / route. */}
            <Routes>

                {/* Main */}
                <Route path="/fridayReportAutomation" element={<FridayReportAutomation />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/createRfcTasks" element={<CreateRfcTasks />} />
                <Route path="/SchemeAnnouncements" element={<SchemeAnnouncements />} />

                {/* Temp testing */}
                {/* <Route path="/test" element={<BaseLayout />} /> */}

                {/* Redirects */}
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/notTribeUser" element={<NotTribeUser />} />
                <Route path="*" element={<NotFound />} />
                <Route path={"/"} element={<RedirectToMainPage />} />

            </Routes>
        </BrowserRouter>
    )
};

export default App;