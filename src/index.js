// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App/App.jsx";

// ReactDOM.render(<App />, document.getElementById("root"));


import * as React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'; // need to import css, because in React it doesn't go to index.html


// To do:
// 1. User clicks a button to either get data for the first time or refresh redmine task data.
// ------ Currently need for a button to make a request 
// 2. The button shows that it's loading as it waits for a response.
// 3. The button shows 'Completed' and turns green.



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

// Source: https://codepen.io/melnik909/pen/BZpJLN
<label class="field field_v1">
    <input class="field__input" placeholder=""></input>
    <span class="field__label-wrap">
      <span class="field__label">Release task number</span>
    </span>
</label>

function App() {
  return (
    <div>
      <button onClick={getAllSupportTasks} className="button-28">Refresh Redmine task data</button>
      <button onClick={anTaskSheetUpdate} className="button-28">Update the announcement sheet</button>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#app'));

