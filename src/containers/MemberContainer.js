import React from 'react'
import '../css/MemberContainer.css'
import LiveTrends from './LiveTrendsContainer'
import UserPortfolio from './UserPortfolio'
import API from '../helpers/API'

class MemberContainer extends React.PureComponent {
    
    state = {
        trends: [],
        showDetails: null,
        ownedTrends: [],
        showOwnedTrendDetails: null
    }

    componentDidMount() {
        if (!this.props.loggedUser) {
            this.props.history.push('/')
        } else {
            API.getTrends().then(trends => this.setState({ trends }))
            API.getUserPortfolio(this.props.loggedUser).then(ownedTrends => this.setState({ownedTrends}))
        }
    }

    toggleDetails = trend => {
        this.setState({ 
            showDetails: trend
        })
    }

    toggleOwnedTrendDetails = trend => {
        this.setState({
            showOwnedTrendDetails: trend
        })
    }

    buyTrend = (boughtTrend, e) => {
        e.preventDefault()

        let userId = this.props.loggedUser
        let quantity = e.target[1].value
        
        API.buyTrends(boughtTrend, userId, quantity)
            // .then(console.log)
            // ownedTrend => this.setState({ownedTrends: [...this.state.ownedTrends, ownedTrend]}))
        API.getUserPortfolio(this.props.loggedUser).then(ownedTrends => this.setState({ownedTrends}))
    }

    sellTrend = (trend, e) => {
        e.preventDefault()

        API.sellTrend(trend)
        const displayTrend = trend === this.state.showOwnedTrendDetails ?  null : this.state.showOwnedTrendDetails
        
            // .then(this.setState({ownedTrends: this.state.ownedTrends.filter(ownTrd => ownTrd.id != trend.id)}))
        API.getUserPortfolio(this.props.loggedUser).then(ownedTrends => this.setState({
            ownedTrends: ownedTrends,
            showOwnedTrendDetails: displayTrend
        }))
    }
    
    render() {
        return (
                <div className="member-container">
                    < LiveTrends trends={this.state.trends} 
                                 showDetails={this.state.showDetails}
                                 toggleDetails={this.toggleDetails}
                                 buyTrend={this.buyTrend}
                                 />

                    < UserPortfolio ownedTrends={this.state.ownedTrends}
                                    toggleOwnedTrendDetails={this.toggleOwnedTrendDetails}
                                    showOwnedTrendDetails={this.state.showOwnedTrendDetails}
                                    sellTrend={this.sellTrend}
                                    />
                </div>
        )
    }
}

export default MemberContainer