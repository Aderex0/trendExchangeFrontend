import React from 'react';
import './css/App.css';
import Header from './components/Header'
import MemberContainer from './containers/MemberContainer'
import Login from './components/Login'
import SignUp from './components/SignUp'

import { withRouter, Route, Link} from 'react-router-dom'
import API from './helpers/API';


class App extends React.PureComponent {
  
  state = {
    currentUserId: null,
    username: null,
    accountBalance: 0
  }

  login = user => {
    this.setState({ 
      currentUserId: user.id,
      username: user.username,
      accountBalance: user.account_balance
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

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
          API.validateUser().then(user => {
            if (user.error) throw (user.error)

            this.login(user)
            this.props.history.push('/member')
          })
      }
  }
  
  render() { 
    return (
      <div className = "box-frame">
        <Header logOut={this.logOut}
                username={this.state.username}
                accountBalance={this.state.accountBalance} />
                
        <Route exact path="/" render={() => 
          <div id="button-location">
            <Link to="/login"><button id="login">Login</button></Link>
            <Link to="/signup"><button id="signup">Sign Up</button></Link>
          </div>
        }/>
        <Route exact path="/login" component={routerProps => <Login {...routerProps} login={this.login} /> } />
        <Route exact path="/signup" component={routerProps => <SignUp {...routerProps} login={this.login} /> } />
        <Route exact path="/member" component={routerProps => <MemberContainer {...routerProps} loggedUser={this.state.currentUserId} /> } />
      </div>
    );
  }
}

export default withRouter(App);
