import uuidv1 from  'uuid/v1';
import {G_TOGGLE_COMPLETED, G_DELETE_TASK, G_ADD_TASK} from "../constants/group.tasks.constants";

const initialState = {

    tasks: [
        {name: "Task 1", completed: false, id: 1},
        {name: "Task 2", completed: true, id: 2}
    ]
};

export default function groupTasksReducers(state=initialState, action) {
    switch (action.type) {
        case G_DELETE_TASK:

            return {
                tasks: state.tasks.slice(0).filter((task) => {
                    return task.id !== action.payload
                })
            };

        case G_TOGGLE_COMPLETED:

            return {
                tasks: state.tasks.slice().map((task) => {
                    if(task.id === action.payload) {
                        task.completed = !task.completed;
                    }

                    return task;
                })
            };
        case G_ADD_TASK:
            return {
                tasks: [...state.tasks, action.payload]
            };

        default:
            return state
    }
}