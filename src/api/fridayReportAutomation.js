// API
import redirectMiddleware from './redirectMiddleware.js';

import config from '../components/config.js';

// Update the Friday Report sheet (fridayReportAutomation)
export default async function fridayReportAutomation() {
    try {
        let anTaskSheetUpdateReponse = await fetch(config().BACKEND_DOMAIN + '/api/fridayReportAutomation', {
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