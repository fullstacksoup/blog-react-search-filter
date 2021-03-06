import React, { Component } from 'react';
import './App.css';
import MainNavParent from './MainLayout/MainNavParent';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Enable Browser History for Back and Forward Button
export const appHistory = createBrowserHistory();

class App extends Component {  

  render() {
    const spacing = 5;
    return (      
      <div className="App">
        <Router history={appHistory}>             
          <MainNavParent />                  
        </Router >
      </div>
    );
  }
}

export default App;
