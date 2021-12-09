import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.js";

// ReactDOM.render(<App />, document.querySelector('#app'));
ReactDOM.render(
    <browserRouter>
        <App />
    </browserRouter>, 
    document.getElementById('root')
);