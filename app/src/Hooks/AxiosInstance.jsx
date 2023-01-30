import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'


const baseURL = 'http://localhost:8000'


let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const RequestManager = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${authTokens?.access}`}
});

RequestManager.interceptors.request.use(async req => {
    if(!authTokens){
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        if (!authTokens){
          return req
        }
        req.headers.Authorization = `Bearer ${authTokens?.access}`
    }

    const user = jwt_decode(authTokens?.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if(!isExpired) return req
    console.log(authTokens)
    const response = await axios.post(`${baseURL}/users/token/refresh/`, {
        refresh: authTokens.refresh
      });

    localStorage.setItem('authTokens', JSON.stringify({access:response.data.access,refresh:authTokens.refresh}))
    req.headers.Authorization = `Bearer ${response.data.access}`
    return req
})


export default RequestManager;