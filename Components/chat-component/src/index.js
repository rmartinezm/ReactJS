import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Redux Imports
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
// Parse Imports
import { config as reactParseConfig, setReactParseDispatch } from 'react-parse'

let store = configureStore();

const APP_ID = "ReactDatabase";
const PARSE_SERVER = "http://localhost:1337/parse";

const apiConfig = { baseURL: PARSE_SERVER, appId: APP_ID }
reactParseConfig.init(apiConfig);
setReactParseDispatch(store.dispatch);

let state = store.getState();
console.log(state);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
