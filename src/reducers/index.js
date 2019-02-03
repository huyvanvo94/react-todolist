import tasksReducers from './tasksReducers';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    tasksReducers: tasksReducers
});

export default reducer;