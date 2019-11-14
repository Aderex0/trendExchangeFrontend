import React from 'react'
import '../css/Header.css'

const Header = ({ username, logOut, accountBalance }) => {

    return (
        <div className="header">
            { username && <p>Welcome {username}!</p> }
            { username && <button onClick={() => logOut()}>Logout</button> }
            <div className='account'>
                <h2>Account Balance: {accountBalance}</h2>

            </div>
            
        </div>
    )
}

export default Header