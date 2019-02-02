
import React, { Component } from 'react';
import Group from './Group.svg';
import logo from "./logo.svg";


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
        color: "#565e5f"
    },
    group: {
        marginTop: "155%",
        marginLeft: "20%"
    }
};

export default class TaskGroupPost extends Component{

    constructor(props){
        super(props);

    }

    render() {
        return (
           <div style={style.container} onClick={()=> {
               console.log("example"); 
           }}>
               <div style={style.leftContainer}>
                <img style={style.group} src={Group} alt="->" />
               </div>

               <div style={style.rightContainer}>
                <p style={style.title}>{this.props.title}</p>
                <p style={style.sub}>{this.props.sub}</p>
               </div>
           </div>
        );
    }
}