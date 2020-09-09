import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './App.css';

import {Login} from "./components/Login";
import {MainView} from "./components/MainView";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class App extends Component{
  constructor(props) {
    super(props);
    localStorage.setItem('email',"luis");
    localStorage.setItem('password',"123");
  }  

    /**
    this.state = {loginView: LoginView,main: Main,isLoggedIn:false}
    this.handleSignIn=this.handleSignIn.bind(this);

    

    if (!localStorage.getItem("isLoggedIn")){
      localStorage.setItem("isLoggedIn",this.state.isLoggedIn);
    }*/
  
  render(){

    const LoginView = () => (
      <Login />
    );
    const Main = () => (
      <MainView />
    );


    /** 
    const LoginView = this.state.loginView;
    const Main = this.state.main;
    const isLoggedIn = this.state.isLoggedIn || (localStorage.getItem("isLoggedIn") == "true" );  */
    let vista;

    if (!localStorage.getItem("isLoggedIn")){
      vista = (
        <div>
          <Route exact path="/" component={LoginView} />          
          <Route exact path="/Login" component={LoginView} />
        </div>   
      );       
    }else {
      vista = (
        <div>
          <MainView />
          <Route exact path="/Main" component={Main} />          
        </div> 
      );    

    }

    return (
        <Router>
          <div className="App">
            {vista}
          </div>
        </Router>
    );
    
  } 
}



export default App;
