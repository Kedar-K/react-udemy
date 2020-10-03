import React, { Component } from 'react';
import classes from  '../Containers/App.css';
import '../components/PersonList/Person/Person.css';
import PersonList from '../components/PersonList/PersonList'
import Cockpit from '../components/Cockpit/Cockpit';


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
    //console.log(person)
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
        <div>
          <PersonList
           persons={this.state.persons}
           clicked={this.deletePersonHandeller}
           changed={this.nameChangedhandler}
          />
        </div>
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        something = {this.state.something}
        togglePersons = {this.togglePersonsHandeller}
        />
        {persons}
        
      </div>
    );
  }
}

export default App;
