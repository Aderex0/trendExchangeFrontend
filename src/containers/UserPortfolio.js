import React from 'react'
import '../css/UserPortfolio.css'
import OwnedTrend from '../components/OwnedTrend'
import OwnedTrendDetails from '../components/OwnedTrendDetails'


class UserPortfolio extends React.PureComponent {

    state = {
        initialValue: 0,
        currentValue: 0
    }

    render() {
        

        return(
            <div className="user-portfolio">
                <h1>Owned stock</h1>
                <h2>Portfolio value {this.state.currentValue}$</h2>
                <div className="owned-trend-box">
                {this.setState({initialValue: this.state.initialValue = 0,
                                currentValue: this.state.currentValue = 0})}
                {this.props.ownedTrends.map((trend, index) => {

                    this.setState({currentValue: this.state.currentValue+=trend.current_valuation, 
                                   initialValue: this.state.initialValue+=trend.initial_valuation})

                        return   < OwnedTrend key={index}
                                       trend={trend}
                                       toggleOwnedTrendDetails={(e) => this.props.toggleOwnedTrendDetails(trend, e)}
                                       sellTrend={(e) => this.props.sellTrend(trend, e)}
                                       />
                                    })}
                                    
                < OwnedTrendDetails showOwnedTrendDetails={this.props.showOwnedTrendDetails}
                                    sellTrend={(e) => this.props.sellTrend(this.props.showOwnedTrendDetails, e)}
                                                />                          
                </div>
            </div>
        )
    }
}

export default UserPortfolio