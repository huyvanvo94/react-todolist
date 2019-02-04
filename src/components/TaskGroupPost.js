
import React, { Component } from 'react';
import Group from './Group.svg';
import {  Redirect } from "react-router-dom";


import uuidv1 from  'uuid/v1';

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
        borderStyle: "solid"

    },

    leftContainer: {
        width: "3%"
    },

    rightContainer: {
        width: "10%"
    },

    title: {
        fontWeight: "bold"
    },
    sub: {
        color: "#565e5f", width: "100%"
    },
    group: {
        marginTop: "100%",
        marginLeft: "20%"
    },
    deleteButton: {
        position: "absolute",
        right:10,
        marginTop: "20px"
    }
};

class TaskGroupPost extends Component{

    constructor(props){
        super(props);

        this.state = {
            toggle: false
        };

        this.pushToTask = this.pushToTask.bind(this);
        this._delete = this._delete.bind(this);

    }

    _delete(){
        this.props.onDelete(this.props.id);

    }

    pushToTask(){

        this.setState({toggle: true});

    }

    test(){
        return <Redirect to="/task"/>
    }


    render() {

        if(this.state.toggle){
            const url = `/task?id=${this.props.id}`;

            return <Redirect to={url}/>
        }
        return (
           <div id={uuidv1()} style={style.container} >
               <div style={style.leftContainer} onClick={this.pushToTask}>
                <img style={style.group} src={Group} alt="->" />
               </div>

               <div style={style.rightContainer} onClick={this.pushToTask}>
                <p style={style.title}>{this.props.title}</p>
                <p style={style.sub}>{`${this.props.count} completed`}</p>
               </div>

               {
                   this.props.canDelete &&
                   <button onClick={this._delete} style={style.deleteButton} className="RedButton Button">Delete</button>
               }
           </div>
        );
    }
}

export default TaskGroupPost;

