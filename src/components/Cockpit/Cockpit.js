import React, {useEffect} from 'react';
import classes from './cockpit.css'

const Cockpit = (props) =>{
    // useEffect(() => {
    //     console.log('[Cockpit ] Use effect');
    //     setTimeout(() => {
    //         alert('saved data to cloud')
    //     }, 1000);
    //     return() =>{
    //         console.log('cockpit cleanup work');
    //     }
    // }, [])

    let assignedCasses=[];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red
    }
    if (props.persons.length <=1){
      assignedCasses.push(classes.red);
    }
    if (props.persons.length <=0){
      assignedCasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1 className={assignedCasses.join(' ')}>Hi react app</h1>
            <button className={btnClass} onClick={props.togglePersons}>switch name</button>
            <p>{props.something}</p>
        </div>
    );
}

export default Cockpit;