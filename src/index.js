import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import history from "./lib/historyUtils";
import App from "./components/App";
import * as serviceWorker from './serviceWorker';
import "./styles/uikit.css";
import "./styles/global.css";

ReactDOM.render(
    <Router history={history} basename={process.env.PUBLIC_URL}>
        <App />
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
