import React from 'react';
import classes from './Person.css';
import Aux from '../../../HOC/Auxilary'
import WithClass from '../../../HOC/WithClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../Containers/Context/authContext'
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
        <AuthContext.Consumer>
            {(context) => context.auth ? <p>logged in</p> : <p>Please log in</p>}
        </AuthContext.Consumer>
        <p onClick={props.click}>I am a person!!!! and my name is {props.name} and {props.age} years old and </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}/>
    </Aux>
    //</div>

)
}

person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default WithClass(person, classes.Person);