import axios from './axios/axios'

const createRoom = (roomName, roomPassword, callbackSuccess, callbackFailure) => {
    console.log(roomName, roomPassword)
    axios.post('/room',{
        roomName,
        roomPassword
    })
    .then((res) => {
        callbackSuccess(res.data)
    })
    .catch(e=>{
        callbackFailure(e)
    })
}

export default createRoom