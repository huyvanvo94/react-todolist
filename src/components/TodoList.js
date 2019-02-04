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

    return {
        tasks: state.tasksReducers.tasks
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
        let task = {title: input, sub: "N/A", id: uuidv1(), subtasks: []};

        this.props.addTask(task);
    }

    renderTaskGroup(task){
        return <TaskGroupPost onDelete={this.onDelete} title={task.title} sub={task.sub} id={task.id} key={uuidv1()} subtasks={task.subtasks}/>
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

/*


                <Input onDone={this.onDone}/>

                {
                    this.props.tasks.map((task) => this.renderTaskGroup(task))
                }
 */

const TodoListComponent = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListComponent;