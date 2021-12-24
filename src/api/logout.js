import redirectMiddleware from "./redirectMiddleware";

export default async function Logout() {
    try {
        let logoutResponse = await fetch('http://localhost:5000/logout', {
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