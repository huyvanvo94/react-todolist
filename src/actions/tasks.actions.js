import {ADD_TASK, DELETE_TASK} from "../constants/tasks.constants";

export function addTask(payload) {
    return {
        type: ADD_TASK, payload
    }
}

export function deleteTask(payload) {
    return {
        type: DELETE_TASK, payload
    }
}