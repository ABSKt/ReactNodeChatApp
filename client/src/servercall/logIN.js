import axios from './axios/axios'

const logIN = (email, password, callbackSuccess, callbackFailure) => {
    axios.post('/login',{
        email,
        password
    })
    .then((res) => {
        callbackSuccess(res.data)
    })
    .catch(e=>{
        callbackFailure(e)
    })
}

export default logIN