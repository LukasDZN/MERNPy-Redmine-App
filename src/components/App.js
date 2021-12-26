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

// Router tools
import { 
    BrowserRouter, 
    Route, 
    Routes
} from "react-router-dom";

// React Hooks
// import { useContext } from "react";
// import { myContext } from "./context/Context.jsx";

// External libraries - Chart
import Chart from "./chart/Chart.jsx";

// Temp testing
import BaseLayout from "../layouts/BaseLayout.jsx";

// ENV variables
import config from './config.js';

// --- App -------------------------------------------------------------------------------
  
function App() {

    // const userObject = useContext(myContext);

    // Check whether the user is already logged in or not
    async function checkIsAuthenticated() {

        // Send a request to check if the user is already logged in
        let logoutResponse = await fetch(config().BACKEND_DOMAIN + '/checkIsAuthenticated', {
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
        // If current route is /login and the user IS logged in, redirect to /dashboard
        } 
        else if (window.location.pathname == '/login' && jsonResponse.authenticationStatus == "user is authenticated") {
            try {
                redirectMiddleware( {'redirectUrl':'/dashboard'} );
            } catch (error) {
                console.log(error);
            };
        }
        
    };

    checkIsAuthenticated();

    return (
        
        <BrowserRouter>
            {/* Input components here in order to render them on every page / route. */}
            <Routes>

                {/* Main */}
                <Route path="/dashboard" element={<FridayReportAutomation />} />
                <Route path="/fridayReportAutomation" element={<FridayReportAutomation />} />
                <Route path="/statistics" element={<BaseLayout />} />

                {/* Temp testing */}
                <Route path="/test" element={<BaseLayout />} />

                {/* Redirects */}
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/notTribeUser" element={<NotTribeUser />} />
                <Route path="*" element={<NotFound />} />
                <Route path={"/"} element={<FridayReportAutomation />} />

            </Routes>
        </BrowserRouter>
    )
};

export default App;