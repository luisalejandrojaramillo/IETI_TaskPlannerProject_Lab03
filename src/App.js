import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './App.css';

import {Login} from "./components/Login";
import {MainView} from "./components/MainView"

class App extends Component{
  constructor(props) {
    super(props);
    localStorage.setItem('email',"luis");
    localStorage.setItem('password',"123");
  }
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <Login />
          </header>
        </div>
      
    );
    
  }
  
}

export default App;
