import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css'

class App extends Component {
  state = {
    persons: [
      {id:'asdasd', name: "kk", age: "22"},
      {id:'dasd', name: "abc", age: "25"}
    ],
    something: "this is something",
    showPersons: false
  }

  deletePersonHandeller =(personsIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personsIndex,1);
    this.setState({persons: persons})
  }

  nameChangedhandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]}
    console.log(person)
    person.name = event.target.value
    const persons = this.state.persons
    persons[personIndex] = person

    this.setState(
      {persons: persons}
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
          {this.state.persons.map((person, index) =>{
            return <Person 
                name={person.name}
                age={person.age} 
                click={this.deletePersonHandeller.bind(this,index)} 
                key={person.id}
                changed={(event) => this.nameChangedhandler(event,person.id)}
                 />
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
