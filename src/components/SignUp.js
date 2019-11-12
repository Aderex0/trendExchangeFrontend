import React from 'react'
import API from '../helpers/API'

class SignUp extends React.PureComponent {
    
    state = {
        username: '',
        password: '',
        account_balance: 50
    }

    updateState = event => {
        this.setState({
            [event.target.name]: event.target.value,
            ...this.state.account_balance
        })
    }

    createUser = event => {
        event.preventDefault()
        API.createUser(this.state).then(console.log)
    }
    
    render() {
        return (
            <form onSubmit={(e) => this.createUser(e)} 
                  onChange={(e) => this.updateState(e)}>
                <input type="text" name="username"></input>
                <input type="password" name="password"></input>
                <input type="submit" value="Submit"></input>    
            </form>
        )
    }
}

export default SignUp