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
                {this.setState({initialValue: this.state.initialValue = 0,
                                currentValue: this.state.currentValue = 0})}
                {this.props.ownedTrends.map((trend, index) => {

                    this.setState({currentValue: this.state.currentValue+=trend.current_valuation, 
                                   initialValue: this.state.initialValue+=trend.initial_valuation})

                   return < OwnedTrend key={index}
                                 trend={trend}
                                 sellTrend={(e) => this.props.sellTrend(trend, e)}
                                                />
                })}
                </div>
                <h1>Portfolio value {this.state.currentValue}$</h1>
            </div>
        )
    }
}

export default UserPortfolio