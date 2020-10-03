import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css';
import styled from 'styled-components'

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'yellow'};
      border: none;
      padding:20px;
      cursor: pointer;
      &:hover {
        background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black
`;

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

    let classes=[];

    if (this.state.persons.length <=1){
      classes.push('red');
    }
    if (this.state.persons.length <=0){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hi react app</h1>
        {persons}
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandeller}>switch name</StyledButton>
        <p>{this.state.something}</p>
      </div>
    );
  }
}

export default App;
