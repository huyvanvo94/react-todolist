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
        this.keyPress = this.keyPress.bind(this);

    }

    _onChange(input){

        this.setState({value: input});
    }

    _onDone(){

        if (this.state.value === null || this.state.value === ''){
            return;
        }

        this.props.onDone(this.state.value);

    }

    keyPress(event){
        if(event.key !== 'Enter') return;

        this._onDone();
    }

    render() {

        return (
           <div >

               <input className="TextField" onKeyDown={(event) => this.keyPress(event) } onChange={(event) => this._onChange(event.target.value)} type={"text"}/>
               <button className="Button" onClick={this._onDone}>Add</button>
           </div>
        );
    }


}