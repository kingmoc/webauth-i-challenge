import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';

// redux stuff
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { dashboardReducder } from "./store/reducer"

const store = createStore(dashboardReducder)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));
