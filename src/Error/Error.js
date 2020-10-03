import React,{Component} from 'react'

class Error extends Component{
    state= {
        hasError: false,
        errormessage: ''
    }

    componentDidCatch = (error, info) =>{
        this.setState({
            hasError: true,
            errormessage: error
        })
    }

    render(){
        if (this.state.hasError){
        return <p>{this.state.errormessage}</p>
        }else{
        return this.props.children;
        }
    }
}

export default Error;