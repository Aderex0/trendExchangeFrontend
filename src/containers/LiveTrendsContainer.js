import React from 'react'
import Trend from '../components/Trend'
import '../css/LiveTrends.css'

class LiveTrendsContainer extends React.PureComponent {

    render() {
        return(
            <div className="live-trend-box">
                <h1>Live Trends</h1>
                {this.props.trends.map((trend, index) => (
                    < Trend key={index}
                            trend={trend}
                            showDetails={this.props.showDetails}
                            toggleDetails={() => this.props.toggleDetails(trend)}
                            buyTrend={(e) => this.props.buyTrend(trend, e)}/>
                ))}
            </div>
        )
    }
}

export default LiveTrendsContainer 