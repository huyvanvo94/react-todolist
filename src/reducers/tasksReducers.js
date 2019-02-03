import {ADD_TASK} from "../constants/tasks.constants";
import uuidv1 from  'uuid/v1';

const initialState = {
    tasks: []
};


function tasksReducers(state=initialState, action) {
    switch (action.type) {
        case ADD_TASK:

            return {
               tasks: [...state.tasks, action.payload]
            };


        default:
            return state;
    }
}


export default tasksReducers;