import React from 'react'
import '../css/OwnedTrendDetails.css'

const OwnedTrendDetails = (props) => {

    return (
        <>
            {props.showOwnedTrendDetails &&
                <div className="owned-trend-details-container">
                    <div className="owned-trend-details-box">
                        <h3>{props.showOwnedTrendDetails.name}</h3>
                        <p>Tweet volume: {props.showOwnedTrendDetails.tweet_volume ? props.showOwnedTrendDetails.tweet_volume : "New"}</p>
                        
                        {props.showOwnedTrendDetails.current_rank > props.showOwnedTrendDetails.initial_rank ?
                        <p style={{color: "green"}}>Current rank: {props.showOwnedTrendDetails.current_rank}</p> :
                        props.showOwnedTrendDetails.current_rank < props.showOwnedTrendDetails.initial_rank ?
                        <p style={{color: "red"}}>Current rank: {props.showOwnedTrendDetails.current_rank}</p> :
                        <p>Current rank: {props.showOwnedTrendDetails.current_rank}</p>
                        }

                        <p>Initial rank: {props.showOwnedTrendDetails.initial_rank}</p>
                        
                        {props.showOwnedTrendDetails.change_percent_valuation > 0 ?
                        <p style={{color: "green"}} >Change: {props.showOwnedTrendDetails.change_percent_valuation}%</p> :
                        props.showOwnedTrendDetails.change_percent_valuation < 0 ?
                        <p style={{color: "red"}}> Change: {props.showOwnedTrendDetails.change_percent_valuation}%</p> :
                        <p> Change: {props.showOwnedTrendDetails.change_percent_valuation}%</p>
                        }

                        {props.showOwnedTrendDetails.current_valuation > 1 ?
                        <p style={{color: "green"}}>Current valuation: {props.showOwnedTrendDetails.current_valuation}</p> :
                        props.showOwnedTrendDetails.current_valuation < 1 ?
                        <p style={{color: "red"}}>Current valuation: {props.showOwnedTrendDetails.current_valuation}</p> :
                        <p>Current valuation: {props.showOwnedTrendDetails.current_valuation}</p>
                        }

                        <p>Quantity: {props.showOwnedTrendDetails.quantity_trends_purchased}</p>

                    </div>
                    <form className="owned-detail-form">
                        <div>
                            <input id="owned-detail-form-sell" type="submit" value="Sell"></input>
                        </div>
                        <input type="radio" name="radio" value="10" id="3"/>
                        <label for="3"> x10 </label>
                        <input type="radio" name="radio" value="5" id="2"/>
                        <label for="2"> x5 </label>
                        <input type="radio" name="radio" value="1" defaultChecked id="1"/>
                        <label for="1"> x1 </label>
                        <input type="radio" name="radio" value="100" id="6"/>
                        <label for="6"> x100 </label>
                        <input type="radio" name="radio" value="50" id="5"/>
                        <label for="5"> x50 </label>
                        <input type="radio" name="radio" value="20" id="4"/>
                        <label for="4"> x20 </label>
                    </form>
                </div>
            }
        </>
    )
}

export default OwnedTrendDetails