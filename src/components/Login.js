import React from 'react'

class Login extends React.PureComponent {
    state = {
        username: '',
        password: ''
    }
    
    render() {
        return (
            <form>
                <input type="text"></input>
                <input type="password"></input>
                <input type="submit" value="Submit"></input>
                <input type="submit" value="Back"></input>
            </form>
        )
    }
}

export default Login