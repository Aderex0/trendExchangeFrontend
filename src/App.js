import React from 'react';
import './css/App.css';
import Header from './components/Header'
import MemberContainer from './containers/MemberContainer'
import Login from './components/Login'
import SignUp from './components/SignUp'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends React.PureComponent {
  
  state = {
    currentUserId: null,
    username: null
  }

  login = user => {
    this.setState({ 
      currentUserId: user.id,
      username: user.username
    })
    localStorage.setItem('token', user.token)
  }

  logOut = () => {
    this.setState({ 
      currentUserId: null,
      username: null 
    })
    localStorage.removeItem('token')
  }
  
  render() { 
    return (
      <Router>
        <div className = "box-frame">
          <Header logOut={this.logOut}
                  username={this.state.username} />
          <Route exact path="/" render={() => 
            <div>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/signup"><button>Sign Up</button></Link>
            </div>
          }/>
          <Route exact path="/login" component={routerProps => <Login {...routerProps} login={this.login} /> } />
          <Route exact path="/signup" component={routerProps => <SignUp {...routerProps} login={this.login} /> } />
          <Route exact path="/member" component={routerProps => <MemberContainer {...routerProps} loggedUser={this.state.currentUserId} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
