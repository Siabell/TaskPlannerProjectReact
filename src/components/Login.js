import React from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import {Button,Form,FormGroup, Label,Input} from 'reactstrap';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        
    }




    handleClick = (e) => {
        e.preventDefault();
        if (this.state.email == localStorage.getItem('email') && this.state.password == localStorage.getItem('password')){
            console.log('this is:',this.state.email );
            alert('Access')
            localStorage.setItem('isLoggedIn', true);
            window.location.href = "/index";
        }
        
    } 

    handleChangeEmail = (e) => {
        this.setState({email: e.target.value}); 
    }

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});    
    }



render() {
    return (
        <Form className="login-form">
            <h2>
                <span className="font-weight-bold">Task Planner</span>
            </h2>
            <img src={logo} alt ='image1'></img>
            <FormGroup>
                <Label>Email</Label>
                <Input id="email" type="email" placeholder="Email" onChange={this.handleChangeEmail} />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input id="password" type="password" placeholder="Password" onChange={this.handleChangePassword}/>
            </FormGroup>
            <Button 
            className="btn-lg btn-block"
            onClick = {this.handleClick}

            >Log in</Button>
            <div className="text-center"><br></br>
                <a href="/signUp">Create Account</a>
            </div>
        </Form>
        
        );
    }
}