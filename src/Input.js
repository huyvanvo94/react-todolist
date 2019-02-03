import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component{

    constructor(props) {
        super(props);


        this.state = {
            value: ""
        };

        this._onChange = this._onChange.bind(this);
        this._onDone = this._onDone.bind(this);

    }

    _onChange(input){

        this.setState({value: input});
    }

    _onDone(){
        this.props.onDone(this.state.value);
        this.setState({value: ""});
    }

    render() {

        return (
           <div >

               <input className="TextField" onChange={(event) => this._onChange(event.target.value)} type={"text"}/>
               <button className="Button" onClick={this._onDone}>Add</button>
           </div>
        );
    }


}