import redirectMiddleware from './redirectMiddleware.js';
import config from '../components/config.js';

const createRfcTasks = async (releaseId, startTime) => {
    try {
        let createRfcReponse = await fetch(config().BACKEND_DOMAIN + config().BACKEND_PORT + `/api/createRfcTasks/${releaseId}/${startTime}`, {
            method: 'GET',
            credentials: 'include'
        });
        let createRfcReponseJson = await createRfcReponse.json();
        redirectMiddleware(createRfcReponseJson);
        return createRfcReponseJson['data'];
    } catch (error) {
        console.log(error);
        return 'error in createRfcTasks.js';
    };
};

export default createRfcTasks;