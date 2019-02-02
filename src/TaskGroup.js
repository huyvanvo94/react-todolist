import React, { Component } from 'react';
import uuidv1 from  'uuid/v1';
import Input from "./TodoList";
import {
    Link
} from 'react-router-dom';
import { withRouter } from "react-router";

import Completed from './Completed.svg';
import Incomplete from './Incomplete.svg';

const TEST = {
    title: "Task Group 1",

    tasks: [
        {name: "Task 1", completed: false, id: uuidv1()},
        {name: "Task 2", completed: true, id: uuidv1()}
    ]

};

const style = {
   listStyleImage: Completed
};

class TaskGroup extends Component {
    constructor(props){
        super(props);


        this.state = TEST;


        this.renderTasks = this.renderTasks.bind(this);
    }

    renderTasks(task){

        return <div >

            {
                task.completed === true ? ( <img src={Completed}/> ) : ( <img src={Incomplete}/> )
            }


            {
                task.completed === true ? ( <p  style={{textDecoration: "line-through"}} >{task.name}</p> ) :  (<p>{task.name}</p> )
            }


        </div>

    }

    render(){
        return (
            <div>
                <div className="Container">
                    <p className="TitleHeader">{this.state.title}</p>

                    <Link to="/"> All Groups </Link>

                    {
                        this.state.tasks.map((task) => {
                            return this.renderTasks(task);
                        })
                    }


                </div>
            </div>
        );
    }
}


export default withRouter(TaskGroup);
