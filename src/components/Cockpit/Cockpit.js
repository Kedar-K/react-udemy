import React, {useEffect, useRef, useContext} from 'react';
import classes from './cockpit.css'
import AuthContext from '../../Containers/Context/authContext'


const Cockpit = (props) =>{
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);
    

    // useEffect(() => {
    //     console.log('[Cockpit ] Use effect');
    //     setTimeout(() => {
    //         alert('saved data to cloud')
    //     }, 1000);
    //     return() =>{
    //         console.log('cockpit cleanup work');
    //     }
    // }, [])
    useEffect(() => {
        toggleButtonRef.current.click();
        return () => {
            console.log('cleanup in effect')
        }
    }, [])

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
            <button ref={toggleButtonRef} className={btnClass} onClick={props.togglePersons}>switch name</button>
            <p>{props.something}</p>

                <button onClick={authContext.login}>Log in</button>
            
        </div>
    );
}

export default Cockpit;