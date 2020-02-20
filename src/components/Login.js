import React from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import {Button,Form,FormGroup, Label,Input} from 'reactstrap';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


export function Login() {
    return (
        <Form className="login-form">
            <h2>
                <span className="font-weight-bold">Task Planner</span>
            </h2>
            <img src={logo} alt ='image1'></img>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
            <Button className="btn-lg btn-block">Log in</Button>
            <div className="text-center"><br></br>
                <a href="/Sign-up">Create Account</a>
            </div>
        </Form>
        
    );
}

export default Login;