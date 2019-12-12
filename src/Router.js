import React from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom'
import Login from './practiceLoginV2/login'
import Page2 from './practiceLoginV2/page2'
import Register from './pages/component/register'
import Page3 from './practiceLoginV2/page3'

function App() {
  return (

    
    <Router>
      <Switch>

        <Route exact path='/login'>        
          {/* IF USER ALREADY LOGIN REDIRECT TO HOMEPAGE */}
          <Login />
        </Route>

        <Route path='/register'>
            <Register />
        </Route>

        <Route path='/page3'>
            <Page3 />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
