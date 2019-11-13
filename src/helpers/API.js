const BASE_URL = 'http://localhost:3000'
const TRENDS = `${BASE_URL}/trends`
const USERS = `${BASE_URL}/users`
const USER_LOGIN = `${BASE_URL}/login`
const USER_VALIDATION = `${BASE_URL}/validate`

//GET TRENDS
const getTrends = () => fetch(TRENDS).then(resp => resp.json())


//BUY TRENDS
const buyTrends = trendDetails => fetch(TRENDS, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(trendDetails)
    }
).then(resp => resp.json())


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

//VALIDATE USER
const validateUser = () => fetch(USER_VALIDATION, {
    headers: {
        Authorization: localStorage.getItem('token')
    }
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
    createUser,
    loginUser,
    validateUser
}