import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css'

class App extends Component {
  state = {
    persons: [
      {name: "kk", age: "22"}
    ],
    something: "this is something"
  }

  switchNameHandeller = (newName) =>{
    this.setState(
      {persons: [
        {name: newName, age: "22"}
      ]
    }
    )
  }

  nameChangedhandler = (event) =>{
    this.setState(
      {persons: [
        {name: event.target.value, age: "22"}
      ]
    }
    )
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      border: 'none',
      padding:'20px'
    }
    return (
      <div className="App">
        <h1>Hi react app</h1>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={() => this.switchNameHandeller("Kedar!!!")}
          changed={this.nameChangedhandler}>
          Hobbies:asasdfs
          </Person>
        <button style={style  }
         onClick={this.switchNameHandeller.bind(this, "kedar")}>switch name</button>
        <p>{this.state.something}</p>
      </div>
    );
  }
}

export default App;
