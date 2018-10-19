import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';


import './index.css';

 const allReducers  = combineReducers({
    postReducer: postReducer
 });

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));