// --- Imports --------------------------------------------------------------------------

// Global CSS
import './app.css';

// Containers
import Topbar from "./topbar/Topbar.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
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

// --- App -------------------------------------------------------------------------------
  
function App() {

    // const userObject = useContext(myContext);

    return (
        <BrowserRouter>
            {/* Input components here in order to render them on every page / route. */}
            <Routes>

                {/* Main */}
                <Route path="/dashboard" element={<FridayReportAutomation />} />
                <Route path="/fridayReportAutomation" element={<FridayReportAutomation />} />

                {/* Temp testing */}
                <Route path="/test" element={<BaseLayout />} />

                {/* Redirects */}
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/notTribeUser" element={<NotTribeUser />} />
                <Route path="*" element={<NotFound />} />
                <Route path={"/"} element={<Login />} />

            </Routes>
        </BrowserRouter>
    )
};

export default App;