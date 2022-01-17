import config from "../components/config";
import axios from 'axios';
import redirectMiddleware from "./redirectMiddleware";

// Either get data for the first time or refresh redmine task data.
const getAllSupportTasks = async () => {
    try {
        var params = {
            method: 'get',
            withCredentials: true,
            timeout: 3000,
            url:  config().BACKEND_DOMAIN + config().BACKEND_PORT + '/api/getAllSupportTasks',
            headers: {},
            data : {}
        };
        const getAllSupportTasksResponse = await axios(params);
        redirectMiddleware(getAllSupportTasksResponse);
        return getAllSupportTasksResponse.data;
    } 
    catch (error) {
        console.log("ERROR: " + error);
    }
};
export default getAllSupportTasks;