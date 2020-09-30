import React from 'react';
import './Person.css'

const person = (props) =>{
return(
    <div className="Person">
        <p onClick={props.click}>I am a person!!!! and my name is {props.name} and {props.age} years old and </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}/>
    </div>

)
}

export default person;