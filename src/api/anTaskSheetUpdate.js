import config from "../components/config";

// Update the announcement sheet (anTaskSheetUpdate)
const anTaskSheetUpdate = async () => {
    try {
        let anTaskSheetUpdateReponse = await fetch(config().BACKEND_DOMAIN + '/anTaskSheetUpdate', {
            method: 'GET'
        });
        return null;
    } catch (error) {
        console.log(error);
        return null;
    };
}; 