import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css'

class App extends Component {
  state = {
    persons: [
      {name: "kk", age: "22"}
    ],
    something: "this is something",
    showPersons: false
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

  togglePersonsHandeller = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      border: 'none',
      padding:'20px'
    }

    let persons = null;
    if(this.state.showPersons){
      persons =(
        <div >
          {this.state.persons.map(person =>{
            return <Person name={person.name} age={person.age} changed={this.nameChangedhandler} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi react app</h1>
        {persons}
        <button style={style}
         onClick={this.togglePersonsHandeller}>switch name</button>
        <p>{this.state.something}</p>
      </div>
    );
  }
}

export default App;
