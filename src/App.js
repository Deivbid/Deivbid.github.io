import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import Contact from './components/Contact'
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'



class App extends Component {
  render() {
    return (
    	<HashRouter>
    		<div>
	        	<Route exact path="/" component={LandingPage} />
	        	<Route  path="/contact" component={Contact} />
        	</div>
        </HashRouter>

    );
  }
}

export default App;
