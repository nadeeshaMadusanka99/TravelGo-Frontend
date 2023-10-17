// WEB URL PATHS
const LOGIN = "/login";



// API URLS

// const BASE_API_URL = "http://16.171.10.136:5000/api";
const BASE_API_URL = "http://localhost:5000/api";
//const BASE_API_URL = "/api";



const LOGIN_API_URL = `${BASE_API_URL}/users/auth`;
const REGISTER_API_URL = `${BASE_API_URL}/users/register`;
const LOGOUT_API_URL = `${BASE_API_URL}/users/logout`
const GET_STATIONS_API_URL = `${BASE_API_URL}/trains/stations`
const GET_SCHEDULE_API_URL = `${BASE_API_URL}/trains/schedule`


export { LOGIN };
export { LOGIN_API_URL, REGISTER_API_URL, LOGOUT_API_URL, GET_STATIONS_API_URL, GET_SCHEDULE_API_URL };

