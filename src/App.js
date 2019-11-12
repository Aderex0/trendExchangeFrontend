import React from 'react';
import './css/App.css';
import Header from './components/Header'
import MemberContainer from './containers/MemberContainer'
import Login from './components/Login'
import SignUp from './components/SignUp'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className = "box-frame">
        <Header />
        <Route exact path="/" render={() => 
          <div>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
          </div>
        }/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/member" component={MemberContainer} />
      </div>
    </Router>
  );
}

export default App;
