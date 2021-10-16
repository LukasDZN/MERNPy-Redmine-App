import React from "react";
import ReactDOM from "react-dom";
// import * as React from 'react';
import '../src/index.css'; // need to import css, because in React it doesn't go to index.html
import App from "./components/App.js";

// ReactDOM.render(<App />, document.querySelector('#app'));
ReactDOM.render(<App />, document.getElementById('root'));

