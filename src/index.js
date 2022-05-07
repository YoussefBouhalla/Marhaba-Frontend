import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import ReactDOM from 'react-dom';
import React from 'react';
import './css/main.css';
import App from './App';

const store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
, document.getElementById('app'));