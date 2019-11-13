import React from 'react'
import '../css/UserPortfolio.css'
import OwnedTrend from '../components/OwnedTrend'


class UserPortfolio extends React.PureComponent {

    state={
        initialValue: 0,
        currentValue: 0
    }

    render() {
        return(
            <div className="user-portfolio">
                <h1>Owned stock</h1>
                <div className="owned-trend-box">
                {this.props.ownedTrends.map((trend, index) => {

                    this.setState({initialValue: this.state.initialValue+=trend.initial_valuation})
                    this.setState({currentValue: this.state.currentValue+=trend.current_valuation})

                   return < OwnedTrend key={index}
                                 trend={trend}
                                                />
                })}
                </div>
            </div>
        )
    }
}

export default UserPortfolio