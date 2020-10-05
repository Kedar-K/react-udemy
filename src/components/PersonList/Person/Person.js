import React from 'react';
import classes from './Person.css';
import Aux from '../../../HOC/Auxilary'
//import styled from 'styled-components'


// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid grey;
//     padding:16px;

//     @media (min-width: 500px){   
//         width: 450px;
//     }
// `;

const person = (props) =>{
// const style= {
//     '@media (min-width: 500px)' :{
//         width: '450px'
//     }
// }
return(
    //<div className="Person">
    //<div className={classes.Person}>
    <Aux>
        <p onClick={props.click}>I am a person!!!! and my name is {props.name} and {props.age} years old and </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}/>
    </Aux>
    //</div>

)
}

export default person;