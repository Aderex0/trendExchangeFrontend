import React from 'react'
import '../css/UserPortfolio.css'
import OwnedTrend from '../components/OwnedTrend'

class UserPortfolio extends React.PureComponent {
    render() {
        return(
            <div className="user-portfolio">
                <h1>Owned stock</h1>
                <div className="owned-trend-box">
                {this.props.ownedTrends.map((trend, index) => (
                    < OwnedTrend key={index}
                                 trend={trend}
                                                />
                ))}
                </div>
            </div>
        )
    }
}

export default UserPortfolio