import tasksReducers from './tasksReducers';
import groupTasksReducers from './groupTasksReducers';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    tasksReducers: tasksReducers,
    groupTasksReducers: groupTasksReducers
});

export default reducer;