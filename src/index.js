import * as React from 'react';
import ReactDOM from 'react-dom';
// Source: https://mui.com/getting-started/usage/
// Installation: npm install @mui/material @emotion/react @emotion/styled
import Button from '@mui/material/Button';

// To do:
// 1. User clicks a button to either get data for the first time or refresh redmine task data.
// ------ Currently need for a button to make a request 
// 2. The button shows that it's loading as it waits for a response.
// 3. The button shows 'Completed' and turns green.

// Either get data for the first time or refresh redmine task data.
const getAllSupportTasks = async () => {
  await fetch('http://localhost:5000/getAllSupportTasks', {
    method: 'GET'
  })
};

function App() {
  return <Button variant="contained">Refresh Redmine task data</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));

