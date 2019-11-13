import React from 'react'
import API from '../helpers/API'
import { Link } from 'react-router-dom'

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
        API.createUser(this.state).then(userData => {
            if (userData.error) throw Error(userData.error)

            this.props.login(userData)
            this.props.history.push('/member')
        })
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <form onSubmit={(e) => this.createUser(e)}>
                <input onChange={(e) => this.updateState(e)} type="text" name="username"></input>
                <input onChange={(e) => this.updateState(e)} type="password" name="password"></input>
                <input type="submit" value="Submit"></input>    
            </form>
        )
    }
}

export default SignUp