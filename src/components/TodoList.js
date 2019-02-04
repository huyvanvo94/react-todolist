import React, { Component } from 'react';
import Input from './Input';
import TaskGroupPost from './TaskGroupPost';
import uuidv1 from  'uuid/v1';
import { connect } from "react-redux";
import './TodoList.css';
import {addTask, deleteTask} from "../actions/tasks.actions";

function mapDispatchToProps(dispatch) {
    return {
        addTask: (payload) => dispatch(addTask(payload)),
        deleteTask: (payload) => dispatch(deleteTask(payload))
    }
}

function mapStateToProps(state) {
    const newTasks = state.tasksReducers.tasks.slice();

    const _task = state.groupTasksReducers.tasks.slice();

    newTasks.map((task) => {

        const t = _task.filter((stask) => {
            return stask.id === task.id
        });

        if(t.length !== 1) {
            return task;
        }

        const st = t[0];

        task.canDelete = (st.subtasks.length === 0);

        let count = st.subtasks.filter((atask) => {
            return atask.completed === true;
        }).length;

        task.sub = `\t${count} tasks completed`;

        return task;
    });

    return {
        tasks: newTasks//state.tasksReducers.tasks
    }
}

class TodoList extends Component{
    constructor(props){
        super(props);

        this.onDone = this.onDone.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id){
        this.props.deleteTask(id);
    }


    onDone(input){
        let task = {title: input, sub: "None completed", id: uuidv1(), subtasks: [], canDelete: true};
        this.props.addTask(task);
    }

    renderTaskGroup(task){
        return <TaskGroupPost onDelete={this.onDelete} canDelete={task.canDelete} title={task.title} sub={task.sub} id={task.id} key={uuidv1()} subtasks={task.subtasks}/>
    }

    render() {
        return (
            <div className="Container" id={uuidv1()}>
                <p className="TitleHeader">Things To Do</p>
                <Input onDone={this.onDone}/>
                {
                    this.props.tasks.map((task) => this.renderTaskGroup(task))
                }
            </div>
        );
    }
}

const TodoListComponent = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListComponent;