import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import components
import TodoList from './TodoList';
import TaskGroup from './TaskGroup';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

import { render } from 'react-dom';



ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path = '/' component={TodoList}/>
            <Route path='/task' component={TaskGroup}/>
        </Switch>

    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
