import React, { Component } from 'react';
import Input from './Input';
import TaskGroupPost from './TaskGroupPost';
import uuidv1 from  'uuid/v1';
import './TodoList.css';


export default class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            tasks: [{title: "Example", sub: "hi", id: uuidv1()}] || this.props.tasks
        };

        this.onDone = this.onDone.bind(this);

    }

    onDone(input){
        console.log('TodoList onDone: ' + input);

        let task = {title: input, sub: "sub", id: uuidv1()};


        this.setState({tasks: [...this.state.tasks, task]});

    }

    renderTaskGroup(task){
        return <TaskGroupPost title={task.title} sub={task.sub} id={task.id}/>
    }

    render() {
        return (
            <div className="Container">
                <p className="TitleHeader">Things To Do</p>

                <Input onDone={this.onDone}/>

                {
                    this.state.tasks.map((task) => this.renderTaskGroup(task))
                }



            </div>
        );
    }
}