import React, { Component } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import "./App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <Form createNote={this.createNote.bind(this)} />
        <List notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
