const BASE_URL = 'http://localhost:3000'
const TRENDS = `${BASE_URL}/trends`
const OWNEDTRENDS = `${BASE_URL}/owned_trends`
const USERS = `${BASE_URL}/users`
const USER_LOGIN = `${BASE_URL}/login`
const USER_VALIDATION = `${BASE_URL}/validate`

//GET TRENDS
const getTrends = () => fetch(TRENDS).then(resp => resp.json())


//BUY TRENDS
const buyTrends = (trendDetails, userId, quantity) => {
    return fetch(OWNEDTRENDS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            trend: {
            name: trendDetails.name,
            query: trendDetails.query,
            url: trendDetails.url,
            user_id: userId,
            initial_rank: trendDetails.rank,
            initial_tweet_volume: trendDetails.tweet_volume,
            initial_valuation: 1,
            quantity_trends_purchased: quantity
            }
        })
    }
).then(resp => resp.json())
}

const sellTrend = (trend) => {
    
    return fetch(`${BASE_URL}/owned_trends/${trend.id}`, {
    
        method: "DELETE"
            })
}


//CREATE NEW USER
const createUser = userDetails => fetch(USERS, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({
        user: userDetails
    })
}).then(resp => resp.json())


//LOGIN USER
const loginUser = userDetails => fetch(USER_LOGIN, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(userDetails)
}).then(resp => resp.json())

const getUserPortfolio = (user_id) => fetch(`${BASE_URL}/users/${user_id}/portfolio`).then(resp => resp.json())

//VALIDATE USER

const validateUser = () => fetch(USER_VALIDATION, {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}).then(resp => resp.json())


export default {
    getTrends,
    buyTrends,
    createUser,
    loginUser,
    getUserPortfolio,
    validateUser,
    sellTrend
}