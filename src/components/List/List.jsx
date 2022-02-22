import React, { Component } from "react";
import CardNote from "../CardNote/CardNote";
import "./style.css";

class List extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <ul className="list">
                {this.props.notes.map((note, index) => {
                    return (
                        <li className="list-item" key={index}>
                            
                            <CardNote  title={note.title} text={note.text}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default List;
