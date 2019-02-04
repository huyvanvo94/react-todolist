import uuidv1 from  'uuid/v1';
import {G_TOGGLE_COMPLETED, G_DELETE_TASK, G_ADD_TASK} from "../constants/group.tasks.constants";
import {ADD_TASK, DELETE_TASK} from "../constants/tasks.constants";

const initialState = {

    tasks: [

    ]
};

export default function groupTasksReducers(state=initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, {title: action.payload.title, id: action.payload.id, subtasks: []}]
            };
        case DELETE_TASK:
            return {
                tasks: state.tasks.slice().filter((task) => {
                    return task.id !== action.payload
                })
            };

        case G_DELETE_TASK:

            return {
                tasks: state.tasks.slice().map((task) => {
                    if(task.id === action.payload.id){

                        task.subtasks = task.subtasks.filter((task) => {
                            return task.id !== action.payload.subtask_id
                        });

                    }

                    return task
                })
            };


        case G_TOGGLE_COMPLETED:

            return {
                tasks: state.tasks.slice().map((task) => {
                    if(task.id === action.payload.id) {
                        task.subtasks = task.subtasks.slice().map((task) => {
                            if(task.id === action.payload.subtask_id) {
                                task.completed = !task.completed;
                            }

                            return task;
                        })
                    }

                    return task;
                })
            };
        case G_ADD_TASK:


            return {
                tasks: state.tasks.slice(0).map((task) => {
                    if( task.id === action.payload.id) {
                        task.subtasks = [...task.subtasks, action.payload.subtask];
                    }
                    return task;
                })
            };

        default:
            return state
    }
}