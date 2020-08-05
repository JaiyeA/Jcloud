import React from "react";

export function signIn(username, password){
    return null
}

export function logOut(){
    return null
}

export class AuthCheck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isAuthorized: null, authenticating: null};        
    }

    componentDidMount(){
        // await server response
        console.log("authenticating...");
        this.setState({isAuthorized: false});
    }

    render(){
        if(this.state.isAuthorized){
            return this.props.protectedResource;
        } else if(this.state.isAuthorized === false){
            return this.props.redirect;
        } else{
            return <p>Please Wait...</p>
        }
    }
}