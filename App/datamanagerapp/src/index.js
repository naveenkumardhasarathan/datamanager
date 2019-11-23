import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Dataview from './public/dataview/dataview';
//import Dataview from './dataview/tablepage';
import Basepage from './Base/basepage';
import BaseNew from './Base/basenew';
import BaseLayout from './Base/baselayout';
import Login from './Login/login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <BaseLayout />
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
