// To do:
// 1. User clicks a button to either get data for the first time or refresh redmine task data.
// ------ Currently need for a button to make a request 
// 2. The button shows that it's loading as it waits for a response.
// 3. The button shows 'Completed' and turns green.

// // Source: https://codepen.io/melnik909/pen/BZpJLN

// Update the announcement sheet (anTaskSheetUpdate)
const anTaskSheetUpdate = async () => {
    let anTaskSheetUpdateReponse = await fetch('http://localhost:5000/anTaskSheetUpdate', {
      method: 'GET'
    });
    return null
};
  
// Either get data for the first time or refresh redmine task data.
const getAllSupportTasks = async () => {
    let getAllSupportTasksReponse = await fetch('http://localhost:5000/getAllSupportTasks', {
        method: 'GET'
    });
    return null
};
  
// Either get data for the first time or refresh redmine task data.
// const createRfc = async () => {
//   let createRfcReponse = await fetch('http://localhost:5000/', {
//     method: 'GET'
//   });
// };
  


// Either get data for the first time or refresh redmine task data.
const autoBuildRelease = async () => {

    console.log('autoBuildRelease button clicked')
    
    let releaseTaskId = document.getElementById('releaseTaskId').value
    let maxTimeSpent = document.getElementById('maxTimeSpent').value
    console.log(releaseTaskId)
    console.log(maxTimeSpent)
    
    try {
        let response = await fetch(`http://localhost:5000/autoBuildRelease/${releaseTaskId}/${maxTimeSpent}`, {
            method: 'GET'
        });
    }
    catch (error) {
        console.log("error" + error);
    }

    return null
};

  
function App() {
    return (
        <div>
            <button onClick={getAllSupportTasks} className="button-28">Refresh Redmine task data</button>
            <button onClick={anTaskSheetUpdate} className="button-28">Update the announcement sheet</button>
            <button onClick={autoBuildRelease} className="button-28">Auto build release</button>
            <label className="field field_v1">
                <input className="field__input" placeholder="" id="releaseTaskId"></input>
                <span className="field__label-wrap">
                    <span className="field__label">Release task number</span>
                </span>
            </label>
            <label className="field field_v1">
                <input className="field__input" placeholder="" id="maxTimeSpent"></input>
                <span className="field__label-wrap">
                    <span className="field__label">Max time spent</span>
                </span>
            </label>
        </div>
    )
};

export default App;