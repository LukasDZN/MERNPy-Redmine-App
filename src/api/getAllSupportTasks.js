import config from "../components/config";

// Either get data for the first time or refresh redmine task data.
const getAllSupportTasks = async () => {
    try {
        let getAllSupportTasksReponse = await fetch(config().BACKEND_DOMAIN + '/api/getAllSupportTasks', {
            method: 'GET'
        });

        // Parse response as JSON (necessary)
        getAllSupportTasksReponse = await getAllSupportTasksReponse.json();
        
        // Iterate through response Objects and  reformat dates from text to date object
        for (let i = 0; i < getAllSupportTasksReponse.length; i++) {
            
            try {
            // Create a new date object
            console.log('Should be string: ' + typeof(getAllSupportTasksReponse[i]['closed_on']))

            let dateReformatted = new Date(getAllSupportTasksReponse[i]['closed_on']); 
            getAllSupportTasksReponse[i]['closed_on'] = dateReformatted;

            console.log('Should be date object: ' + typeof(getAllSupportTasksReponse[i]['closed_on']));
            
            } 
            catch (error) {
                console.log(error);
            }

        };

        // console.log(getAllSupportTasksReponse);

        return getAllSupportTasksReponse;
        
    } catch (error) {
        console.log(error);
        return null;
    };
};