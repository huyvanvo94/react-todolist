import React, { Component } from 'react';
import uuidv1 from  'uuid/v1';

import Input from "./Input";
import {
    Link
} from 'react-router-dom';
import { withRouter } from "react-router";

import Completed from './Completed.svg';
import Incomplete from './Incomplete.svg';

import {toggleCompleted, addTask, deleteTask} from "../actions/group.tasks.actions";
import {connect} from "react-redux";

const KEY = 'hello';

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

function mapDispatchToProps(dispatch) {
    return {
        addTask: (payload) => dispatch(addTask(payload)),
        deleteTask: (payload) => dispatch(deleteTask(payload)),
        toggleCompleted: (payload) => dispatch(toggleCompleted(payload))
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.groupTasksReducers.tasks
    }
}

class TaskGroup extends Component {
    constructor(props){
        super(props);


        this.renderTasks = this.renderTasks.bind(this);
        this._toggleCompleted = this._toggleCompleted.bind(this);

        this.onDone = this.onDone.bind(this);
        this._deleteTask = this._deleteTask.bind(this);
    }

    // ACTION: toggle
    _toggleCompleted(id){
        console.log(id);

        this.props.toggleCompleted(id);


    }

    // ACTION: delete tasks
    _deleteTask(id){
        this.props.deleteTask(id);
    }

    // render to UI
    renderTasks(task){

        let src = task.completed === true ? Completed : Incomplete;


        return <div style={style.container} key={uuidv1()}>


            <div style={style.leftContainer}>
                <img onClick={()=> this._toggleCompleted(task.id)} src={src}/>
            </div>


            <div style={style.rightContainer}>
            {
                task.completed === true ? ( <p  style={{textDecoration: "line-through"}} >{task.name}</p> ) :  (<p>{task.name}</p> )
            }
            </div>

                {
                    task.completed && <button onClick={() => this._deleteTask(task.id)} style={{position: "absolute", right: "0"}} className="RedButton Button">Delete</button>
                }



        </div>

    }

    // add
    onDone(text) {
        console.log('text: ' + text);

        this.props.addTask(  {name: text, id: uuidv1(), completed: false} );
    }

    render(){
        return (
            <div>
                <div className="Container">

                    <p className="TitleHeader">Tasks 1</p>
                    <Link to="/"> All Groups </Link>

                    <Input onDone={this.onDone}/>
                    {
                        this.props.tasks.map((task) => {
                            return this.renderTasks(task);
                        })
                    }





                </div>
            </div>
        );
    }
}

//


const TaskGroupComponent = connect(mapStateToProps, mapDispatchToProps)(TaskGroup);

export default TaskGroupComponent;
