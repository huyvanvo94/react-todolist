import {ADD_TASK, DELETE_TASK, DELETE_SUB_TASK, SUB_ADD_TASK, SUB_TOGGLE_COMPLETE} from "../constants/tasks.constants";
import {G_TOGGLE_COMPLETED} from "../constants/group.tasks.constants";

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
                tasks: state.tasks.slice().filter((task) => {
                    return task.id !== action.payload
                })
            };

        case G_TOGGLE_COMPLETED:
            return {
                tasks: state.tasks.slice(0).map((task) => {

                    if(task.id === action.payload.id){

                        if(action.payload.completed)
                            task.count = task.count + 1;
                        else
                            task.count = task.count - 1;

                        console.log(task.count);
                    }

                    return task;

                })
            };


        default:
            return state;
    }
}


export default tasksReducers;