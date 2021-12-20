// Update the announcement sheet (anTaskSheetUpdate)
const anTaskSheetUpdate = async () => {
    try {
        let anTaskSheetUpdateReponse = await fetch('http://localhost:5000/anTaskSheetUpdate', {
            method: 'GET'
        });
        return null;
    } catch (error) {
        console.log(error);
        return null;
    };
};