// Update the Friday Report sheet (fridayReportAutomation)
export default async function fridayReportAutomation() {
    try {
        let anTaskSheetUpdateReponse = await fetch('http://localhost:5000/fridayReportAutomation', {
            method: 'GET'
        });
        return 'success';
    } catch (error) {
        console.log(error);
        return 'error';
    };
};