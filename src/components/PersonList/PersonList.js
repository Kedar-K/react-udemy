import React from 'react';
import Person from './Person/Person'
import AuthContext from '../../Containers/Context/authContext'

const PersonList = (props) => {
    return(
    props.persons.map((person, index) =>{
        return <Person 
            name={person.name}
            age={person.age} 
            click={()=>props.clicked(index)} 
            key={person.id}
            changed={(event) => props.changed(event,person.id)}
             />
      })
)}

export default PersonList