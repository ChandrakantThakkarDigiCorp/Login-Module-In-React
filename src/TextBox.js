import React, { Component } from 'react';

class TextBox extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onHandleChange(e.target.value,e.target.name);
    }
    render(){
        return (<input type={this.props.type} value={this.props.value} className={this.props.className} name={this.props.name} onChange={this.handleChange} />);
    }
}

export default TextBox;