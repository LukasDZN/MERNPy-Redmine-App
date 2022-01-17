import config from "../components/config";

// Either get data for the first time or refresh redmine task data.
const updateAllSupportTasks = async () => {
    try {
        let updateAllSupportTasksReponse = await fetch(config().BACKEND_DOMAIN + config().BACKEND_PORT + '/api/updateAllSupportTasks', {
            method: 'GET'
        });

        // Parse response as JSON (necessary)
        updateAllSupportTasksReponse = await updateAllSupportTasksReponse.json();
        
        // Iterate through response Objects and  reformat dates from text to date object
        for (let i = 0; i < updateAllSupportTasksReponse.length; i++) {
            
            try {
                // Create a new date object
                console.log('Should be string: ' + typeof(updateAllSupportTasksReponse[i]['closed_on']))

                let dateReformatted = new Date(updateAllSupportTasksReponse[i]['closed_on']); 
                updateAllSupportTasksReponse[i]['closed_on'] = dateReformatted;

                console.log('Should be date object: ' + typeof(updateAllSupportTasksReponse[i]['closed_on']));
                
            } 
            catch (error) {
                console.log(error);
            }
        };

        // console.log(updateAllSupportTasksReponse);

        return updateAllSupportTasksReponse;
        
    } catch (error) {
        console.log(error);
        return null;
    };
};