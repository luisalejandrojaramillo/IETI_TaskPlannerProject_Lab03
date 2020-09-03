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
    const LoginView = () => (
      <Login handleSignIn={this.handleSignIn}/>
    );
    const Main = () => (
      <MainView/>
    );
    this.state = {loginView: LoginView,main: Main,isLoggedIn:false}
    this.handleSignIn=this.handleSignIn.bind(this);

    localStorage.setItem('email',"luis");
    localStorage.setItem('password',"123");

    if (!localStorage.getItem("isLoggedIn")){
      localStorage.setItem("isLoggedIn",this.state.isLoggedIn);
    }
  }
  render(){

    const LoginView = this.state.loginView;
    const Main = this.state.main;
    const isLoggedIn = this.state.isLoggedIn || (localStorage.getItem("isLoggedIn") == "true" );
    let vista;
    if (!isLoggedIn){
      vista = (
          <div>
              <ul>
                  <li><Link to="/">Login</Link></li>
              </ul>
              <div>
                  <Route exact path="/" component={LoginView}/>
              </div>
          </div>

      );       
    }else {
      vista = (
          <div>
              <ul>
                  <li><Link to="/Main">Main</Link></li>
              </ul>
              <div>
                    <Route path="/Main" component={Main}/>
              </div>
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

  handleSignIn(){
    this.setState({isLoggedIn:true})
  }
  
}



export default App;
