const BASE_URL = 'http://localhost:3000'
const TRENDS = `${BASE_URL}/trends`
const USERS = `${BASE_URL}/users`

//TREND
const getTrends = () => fetch(TRENDS).then(resp => resp.json())
const buyTrends = trendDetails => fetch(TRENDS, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({ trendDetails })
    }
).then(resp => resp.json())

//USER
const createUser = userDetails => fetch(USERS, {
    method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ 
            username: userDetails.username, 
            password: userDetails.password, 
            account_balance: userDetails.account_balance
        })
}).then(resp => resp.json())
// {
//     name: ,
//     url: ,
//     tweet_volume: , 
//     user_id:  , 
//     initial_rank: [rank],
//     current_rank: [rank],
//     valuation: 1,
// }

export default {
    getTrends,
    buyTrends,
    createUser
}