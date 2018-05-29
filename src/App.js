import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import Contact from './components/Contact'
import {BrowserRouter, Route} from 'react-router-dom'



class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div>
	        	<Route exact path="/" component={LandingPage} />
	        	<Route  path="/contact" component={Contact} />
        	</div>
        </BrowserRouter>

    );
  }
}

export default App;
