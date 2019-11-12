import React from 'react'
import '../css/Trend.css'

class Trend extends React.PureComponent {
    
    render() {

        const { name, tweet_volume} = this.props.trend

        return (
            <>
                <div onClick={this.props.toggleDetails} className="trend-box">
                    <div id="trend-info">
                        <h3>{name}</h3>
                        <p>Tweet volume: {tweet_volume ? tweet_volume : "New"}</p>
                    </div>
                     <form onSubmit={this.props.buyTrend} id="form">
                        <input id="buy" type="submit" value="Buy"></input>
                        <input id="number" type="number" defaultValue="1"></input>
                    </form>
                </div>
                    {this.props.showDetails === this.props.trend &&
                    <div className="trend-details">
                        <div id="basic-trend-info">
                            <h3>{this.props.showDetails.name}</h3>
                            <p>Tweet volume: {this.props.tweet_volume ? this.props.tweet_volume : "New"}</p>
                            <a href={this.props.showDetails.url} target="_blank">Tweet Link</a>
                        </div>
                        <form id="detail-form">
                            <input type="radio" name="radio" value="1" defaultChecked id="1"/>
                            <label for="1"> x1 </label>
                            <input type="radio" name="radio" value="5" id="2"/>
                            <label for="2"> x5 </label>
                            <input type="radio" name="radio" value="10" id="3"/>
                            <label for="3"> x10 </label>
                            <input type="radio" name="radio" value="20" id="4"/>
                            <label for="4"> x20 </label>
                            <input type="radio" name="radio" value="50" id="5"/>
                            <label for="5"> x50 </label>
                            <input type="radio" name="radio" value="100" id="6"/>
                            <label for="6"> x100 </label>
                            <input id="buy-detail" type="submit" value="Buy"></input>
                        </form>
                    </div>
                    }
            </>
        )
    }
}

export default Trend