import {ADD_TASK, DELETE_TASK} from "../constants/tasks.constants";
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

        case DELETE_TASK:

            return {
                tasks: state.tasks.slice(0).filter((task) => {
                    return task.id !== action.payload
                })
            };


        default:
            return state;
    }
}


export default tasksReducers;