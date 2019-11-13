import React from 'react'
import '../css/OwnedTrend.css'

class OwnedTrend extends React.PureComponent {
    render() {

    const { name, url, tweet_volume } = this.props.trend

    return (
        <>
            <div className="owned-trend-info-box">
                <div onClick={this.props.showDetails} className="owned-trend-info">
                    <h3>{name}</h3>
                    <p>{tweet_volume ? tweet_volume : "New"}</p>
                </div>
                <form className="sell-form">
                    <input className="sell" type="submit" value="Sell"></input>
                    <input className="sell-amount" type="number" defaultValue="1"></input>
                </form>
            </div>
            {this.props.trend
                  
            }
        </>
    )
    }
}

export default OwnedTrend