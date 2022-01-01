import config from "../components/config";

// Update the announcement sheet (anTaskSheetUpdate)
const anTaskSheetUpdate = async () => {
    try {
        let anTaskSheetUpdateReponse = await fetch(config().BACKEND_DOMAIN + config().BACKEND_PORT + '/api/anTaskSheetUpdate', {
            method: 'GET'
        });
        return null;
    } catch (error) {
        console.log(error);
        return null;
    };
}; 