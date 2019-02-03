import {G_ADD_TASK, G_DELETE_TASK, G_TOGGLE_COMPLETED} from "../constants/group.tasks.constants";

export function addTask(payload) {
    return {
        type: G_ADD_TASK, payload
    }
}

export function deleteTask(payload){
    return {
        type: G_DELETE_TASK, payload
    }

}

export function toggleCompleted(payload) {
    return {
        type: G_TOGGLE_COMPLETED, payload
    }
}