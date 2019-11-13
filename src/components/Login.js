import React from 'react'
import API from '../helpers/API'



class Login extends React.PureComponent {
    
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        API.loginUser(this.state).then(userData => {
            if (userData.error) throw Error(userData.error)

            this.props.login(userData)
            this.props.history.push('/member')
        })
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input onChange={(e) => this.handleChange(e)} name="username" type="text"></input>
                <input onChange={(e) => this.handleChange(e)} name="password" type="password"></input>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Login