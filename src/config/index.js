// WEB URL PATHS
const LOGIN = "/login";



// API URLS
const BASE_API_URL = "http://localhost:5000/api";

const LOGIN_API_URL = `${BASE_API_URL}/users/auth`;
const REGISTER_API_URL = `${BASE_API_URL}/users/register`;
const LOGOUT_API_URL = `${BASE_API_URL}/users/logout`


export { LOGIN };
export { LOGIN_API_URL, REGISTER_API_URL, LOGOUT_API_URL };