import React from "react";
import axios from 'axios';

export function logOut(){
    axios.get('/logout',{})
}

export class AuthCheck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isAuthorized: null};        
    }

    componentDidMount(){
        axios.get('/auth-check',{})
        .then((res)=>{
            const response = res.data.authenticated;
            if(response){
                this.setState({isAuthorized: true});
            }else{
                this.setState({isAuthorized: false});
            }
        })
    }

    render(){
        if(this.state.isAuthorized){
            return this.props.protectedResource;
        } else if(this.state.isAuthorized === false){
            return this.props.redirect;
        } else{
            return <title>Please Wait...</title>
        }
    }
}