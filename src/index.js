import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';


import './index.css';

// As your app grows more complex, you'll want to split your reducing function
//into separate functions, each managing independent parts of the state.
//The combineReducers helper function turns an object whose values are different
//reducing functions into a single reducing function you can pass to createStore.
 const allReducers  = combineReducers({
    postReducer: postReducer
 });

 // A store holds the whole state tree of your application.
 // The only way to change the state inside it is to dispatch an action on it.
 // To Have a single source of truth: The state of your whole application is
 // stored in an object tree within a single Redux store.
const store = createStore(allReducers);

//Provider is a React component in “react-redux” library.
// It serves just one purpose : to “provide” the store to its child components.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));