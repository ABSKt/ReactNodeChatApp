import axios from './axios/axios'

const signUp = (email, name, password, callbackSuccess, callbackFailure) => {
    axios.post('/signup', {
        email,
        name,
        password
    })
    .then((res) => {
        callbackSuccess(res.data)
    })
    .catch(e=>{
        callbackFailure(e)
    })
}

export default signUp