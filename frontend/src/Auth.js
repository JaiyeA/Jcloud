import React from "reeact";

export function signIn(username, password){

}

export function logOut(){
    
}

export class AuthCheck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isAuthorized:'false', authenticating: 'true'};        
        this.authenticate = this.authenticate.bind(this);
    }

    async authenticate(){
        // await server response
        if(this.isAuthorized){
            return props.protectedResource;
        } else{
            //redirect the user to the login screen (use the history.push() function)
            return "must sign in";
        }

    }

    render(){
        return this.authenticate()
    }
}