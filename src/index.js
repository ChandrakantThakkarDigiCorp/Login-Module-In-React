import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from "./Form";
import LoginComponent from "./LoginComponent";
import registerServiceWorker from './registerServiceWorker';
import Main from "./LoginModule/Main";
import { BrowserRouter ,HashRouter,  Switch,  Route,  Link } from 'react-router-dom';

var element=(<div>
<link href="http://propeller.in/assets/landing-page/images/favicon.ico" type="image/x-icon" rel="icon" />
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
                <link href="http://propeller.in/components/card/css/card.css" type="text/css" rel="stylesheet" />
                <link href="http://propeller.in/docs/css/example-docs.css" type="text/css" rel="stylesheet" />
                <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link href="http://propeller.in/components/textfield/css/textfield.css" type="text/css" rel="stylesheet" />
<Main />
</div>);

ReactDOM.render(<BrowserRouter>{element}</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
