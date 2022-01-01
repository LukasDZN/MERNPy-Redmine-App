import config from "../components/config";

// Either get data for the first time or refresh redmine task data.
const autoBuildRelease = async () => {

    console.log('autoBuildRelease button clicked')
    
    let releaseTaskId = document.getElementById('releaseTaskId').value
    let maxTimeSpent = document.getElementById('maxTimeSpent').value
    console.log(releaseTaskId)
    console.log(maxTimeSpent)
    
    try {
        let response = await fetch(config().BACKEND_DOMAIN + `/api/autoBuildRelease/${releaseTaskId}/${maxTimeSpent}`, {
            method: 'GET'
        });
    }
    catch (error) {
        console.log("error" + error);
    }

    return null
};