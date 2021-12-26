import redirectMiddleware from "./redirectMiddleware";
import config from "../components/config";

// API for testing purposes
export default async function randomApi() {
    try {
        let randomApiResponse = await fetch(config().BACKEND_DOMAIN + '/randomApi', {
            method: 'GET',
            credentials: 'include'
        });
        let jsonResponse = await randomApiResponse.json();
        redirectMiddleware(jsonResponse);
        console.log(jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.log(error);
        return `ERROR: ${error}`
    };
};