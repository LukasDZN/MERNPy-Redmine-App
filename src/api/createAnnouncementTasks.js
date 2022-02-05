import redirectMiddleware from './redirectMiddleware.js';
import config from '../components/config.js';

const createAnnouncementTasks = async () => {
    try {
        let createRfcReponse = await fetch(config().BACKEND_DOMAIN + config().BACKEND_PORT + '/api/createAllTasks', {
            method: 'GET',
            credentials: 'include'
        });
        let createRfcReponseJson = await createRfcReponse.json();
        redirectMiddleware(createRfcReponseJson);
        return createRfcReponseJson['data'];
    } catch (error) {
        console.log(error);
        return 'error in createAnnouncementTasks.js';
    };
};

export default createAnnouncementTasks;