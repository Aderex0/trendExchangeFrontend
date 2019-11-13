import React from 'react'
import '../css/MemberContainer.css'
import LiveTrends from './LiveTrendsContainer'
import UserPortfolio from './UserPortfolio'
import API from '../helpers/API'

class MemberContainer extends React.PureComponent {
    
    state = {
        trends: [],
        showDetails: null,
        ownedTrends: []
    }

    componentDidMount() {
        if (!this.props.loggedUser) {
            this.props.history.push('/')
        } else {
            API.getTrends().then(trends => this.setState({ trends }))
        }
    }

    toggleDetails = trend => {
        this.setState({ 
            showDetails: trend
        })
    }

    buyTrend = (boughtTrend, e) => {
        e.preventDefault()
        
        API.buyTrends(boughtTrend).then(trend => this.setState({ 
            ownedTrends: [
                ...this.state.ownedTrends,
                trend
            ]
        }))
    }
    
    render() {
        return (
                <div className="member-container">
                    < LiveTrends trends={this.state.trends} 
                                 showDetails={this.state.showDetails}
                                 toggleDetails={this.toggleDetails}
                                 buyTrend={this.buyTrend}/>

                    < UserPortfolio ownedTrends={this.state.ownedTrends}
                                    />
                </div>
        )
    }
}

export default MemberContainer