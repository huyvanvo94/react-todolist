import React, { Component } from 'react';
import uuidv1 from  'uuid/v1';
import Input from "./TodoList";

import { withRouter } from "react-router";

const TEST = {
    title: "Task Group 1",

    tasks: [
        {name: "Task 1", completed: false, id: uuidv1()},
        {name: "Task 2", completed: true, id: uuidv1()}
    ]

};

class TaskGroup extends Component {
    constructor(props){
        super(props);


        this.state = TEST;


    }

    render(){
        return (
            <div>
                <div className="Container">
                    <p className="TitleHeader">{this.state.title}</p>



                </div>
            </div>
        );
    }
}


export default withRouter(TaskGroup);