import React from 'react'
import '../css/OwnedTrend.css'

class OwnedTrend extends React.PureComponent {
    render() {

    const { name, url, tweet_volume, current_valuation, quantity_trends_purchased } = this.props.trend

    return (
        <>  {this.props.trend &&
                <div className="owned-trend-info-box">
                    <div onClick={this.props.toggleOwnedTrendDetails} className="owned-trend-info">
                        <h3>{name}</h3>
                        <p>{tweet_volume ? tweet_volume : "New"}</p>
                    </div>
                    <form className="sell-form">
                        <input className="sell" type="submit" value="Sell"></input>
                        <input className="sell-amount" type="number" defaultValue="1"></input>
                        <div className="owned-trend-price">
                            <p>£ {current_valuation}</p>
                        </div>
                        <div className="owned-trend-qty">
                            <p>Qty: {quantity_trends_purchased}</p>
                        </div>
                    </form>
                </div>
            }
        </>
    )
    }
}

export default OwnedTrend