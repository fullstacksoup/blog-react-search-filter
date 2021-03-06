import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
export default function MainRouter() {
  
  return (
    <div>           
      <Switch>        
          <Route exact path="/" component={Welcome} />                          
      </Switch>        
    </div>
  );
}

