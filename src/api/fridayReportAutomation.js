// API
import redirectMiddleware from './redirectMiddleware.js';

import config from '../components/config.js';

// Update the Friday Report sheet (fridayReportAutomation)
export default async function fridayReportAutomation() {
    try {
        let anTaskSheetUpdateReponse = await fetch(config().BACKEND_DOMAIN + config().BACKEND_PORT + '/api/fridayReportAutomation', {
            method: 'GET',
            credentials: 'include'
        });
        let jsonResponse = await anTaskSheetUpdateReponse.json();
        redirectMiddleware(jsonResponse); // if redirectUrl is present -> redirect to that URL.
        return jsonResponse['data'];
    } catch (error) {
        console.log(error);
        return 'error in fridayReportAutomation.js';
    };
};