import React, { Component } from 'react';
import classes from  '../Containers/App.css';
import '../components/PersonList/Person/Person.css';
import PersonList from '../components/PersonList/PersonList'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '..//HOC/WithClass'
import Aux from '../HOC/Auxilary'
import AuthContext from '../Containers/Context/authContext'

class App extends Component {
  constructor(props){
    super(props);
    console.log('App ja constructor');
  }

  state = {
    persons: [
      {id:'asdasd', name: "kk", age: 22},
      {id:'dasd', name: "abc", age: 25}
    ],
    something: "this is something",
    showPersons: false,
    auth: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('getderivedstatefromprops', props);
    return state;
  }

  componentWillUnmount(){
    console.log('[App] will unmount');
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

  loginHandller = () =>{
    this.setState({auth: true});
  }

  render() {
    
    console.log('appjs render')
    let persons = null;
    if(this.state.showPersons){
      persons =(
        <div>
          <PersonList
           persons={this.state.persons}
           clicked={this.deletePersonHandeller}
           changed={this.nameChangedhandler}
           auth={this.state.auth}
          />
        </div>
      )
    }

    return (
      <Aux>
        <AuthContext.Provider value={{auth: this.state.auth, login: this.loginHandller}}>
        <Cockpit
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        something = {this.state.something}
        togglePersons = {this.togglePersonsHandeller}
        />
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
