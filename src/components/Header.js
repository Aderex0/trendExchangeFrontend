import React from 'react'
import '../css/Header.css'

const Header = ({ username, logOut }) => {

    return (
        <div className="header">
            { username && <p>Welcome {username}!</p> }
            { username && <button onClick={() => logOut()}>Logout</button> }
        </div>
    )
}

export default Header