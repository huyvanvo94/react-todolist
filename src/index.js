import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import history from './history';
// import components

import TodoListComponent from './TodoList';
import TaskGroup from './TaskGroup';

import {
    Router,
    Switch,
    Route
} from 'react-router-dom';

import { render } from 'react-dom';

import reducer from './reducers/index';
import {createStore} from "redux";
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch >
                <Route exact path = '/' component={TodoListComponent}/>
                <Route path='/task' component={TaskGroup}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
