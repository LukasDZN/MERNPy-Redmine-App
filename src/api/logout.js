import redirectMiddleware from "./redirectMiddleware";
import config from "../components/config.js";

export default async function Logout() {
    try {
        let logoutResponse = await fetch(config().BACKEND_DOMAIN + '/logout', {
            method: 'GET',
            credentials: 'include'
        });
        let jsonResponse = await logoutResponse.json();
        console.log(jsonResponse);
        redirectMiddleware(jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.log(error);
        return `ERROR: ${error}`
    };
};