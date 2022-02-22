import React, { Component } from "react";
import "./style.css";

class Form extends Component {

    constructor(props){
        super(props);
        this.title = "";
        this.text = "";
    }

    _handleTitleChange(_event){
        _event.stopPropagation();
        this.title = _event.target.value;
    }

    _handleTextChange(_event){
        _event.stopPropagation();
        this.text = _event.target.value;
    }

    _createNote(_event){
        _event.preventDefault();
        _event.stopPropagation();
        this.props.createNote(this.title, this.text);
    }

    render(){
        return (
            <form className="form">
                <input type="text" 
                    placeholder="Título" 
                    className="form-input" 
                    onChange={this._handleTitleChange.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-input"
                    onChange={this._handleTextChange.bind(this)}
                />
                <button className="form-input form-input-submit" onClick={this._createNote.bind(this)}>Criar Nota</button>
            </form>
        );
    }
}

export default Form;
