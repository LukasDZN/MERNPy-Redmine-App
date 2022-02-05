import redirectMiddleware from './redirectMiddleware.js';
import config from '../components/config.js';

const updateAnnouncementTasks = async () => {
    try {
        let updateAnnouncementTasksResponse = await fetch(config().BACKEND_DOMAIN + config().BACKEND_PORT + '/api/updateTaskStatus', {
            method: 'GET',
            credentials: 'include'
        });
        let updateAnnouncementTasksJson = await updateAnnouncementTasksResponse.json();
        redirectMiddleware(updateAnnouncementTasksJson);
        return updateAnnouncementTasksJson['data'];
    } catch (error) {
        console.log(error);
        return 'error in updateAnnouncementTasks.js';
    };
};

export default updateAnnouncementTasks;