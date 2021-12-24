// API
import redirectMiddleware from './redirectMiddleware.js';

// Update the Friday Report sheet (fridayReportAutomation)
export default async function fridayReportAutomation() {
    try {
        let anTaskSheetUpdateReponse = await fetch('http://localhost:5000/fridayReportAutomation', {
            method: 'GET',
            credentials: 'include'
        });
        let jsonResponse = await anTaskSheetUpdateReponse.json();
        redirectMiddleware(jsonResponse);
        return 'success';
    } catch (error) {
        console.log(error);
    };
};