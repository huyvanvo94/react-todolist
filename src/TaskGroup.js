import React, { Component } from 'react';
import uuidv1 from  'uuid/v1';

import Input from "./Input";
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
    container: {

        height: "100%",
        width: "100%",
        display: "flex",
        borderTopWidth:  1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: "#6D7576",
        borderStyle: "solid",
        textAlign: "center"

    },

    leftContainer: {
        marginTop: "15px",
        width: "3%"
    },

    rightContainer: {

    },

    title: {
        fontWeight: "bold"
    },
    sub: {
        color: "#565e5f"
    },
    group: {
        marginTop: "100%",
        marginLeft: "20%"
    }
};

class TaskGroup extends Component {
    constructor(props){
        super(props);


        this.state = TEST;


        this.renderTasks = this.renderTasks.bind(this);
        this.boxOnTouch = this.boxOnTouch.bind(this);

        this.onDone = this.onDone.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    boxOnTouch(id){
        console.log(id);

        const tasks = this.state.tasks.slice().map((task) => {
            if(task.id === id) {
                task.completed = !task.completed;
            }

            return task;
        });

        this.setState({tasks: tasks});
    }

    deleteTask(id){


        const tasks = this.state.tasks.slice().filter((task) =>{
            return task.id !== id
        });

        this.setState({tasks: tasks});
    }

    renderTasks(task){

        let src = task.completed === true ? Completed : Incomplete;


        return <div style={style.container} key={uuidv1()}>


            <div style={style.leftContainer}>
                <img onClick={()=> this.boxOnTouch(task.id)} src={src}/>
            </div>


            <div style={style.rightContainer}>
            {
                task.completed === true ? ( <p  style={{textDecoration: "line-through"}} >{task.name}</p> ) :  (<p>{task.name}</p> )
            }
            </div>

                {
                    task.completed && <button onClick={() => this.deleteTask(task.id)} style={{position: "absolute", right: "0"}} className="RedButton Button">Delete</button>
                }



        </div>

    }

    onDone(text) {
        console.log('text: ' + text);

        this.setState( {
            tasks: [...this.state.tasks, {name: text, id: uuidv1(), completed: false}]
        });
    }

    render(){
        return (
            <div>
                <div className="Container">

                    <p className="TitleHeader">{this.state.title}</p>
                    <Link to="/"> All Groups </Link>

                    <Input onDone={this.onDone}/>


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
