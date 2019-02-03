import {ADD_TASK} from "../constants/tasks.constants";

export function addTask(payload) {
    return {
        type: ADD_TASK, payload
    }
}
