import redirectMiddleware from "./redirectMiddleware";

// API for testing purposes
export default async function randomApi() {
    try {
        let randomApiResponse = await fetch('http://localhost:5000/randomApi', {
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