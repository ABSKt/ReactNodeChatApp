import axios from './axios/axios'

const getAllRooms = (id, callbackSuccess, callbackFailure) => {
    console.log(id)
    axios.get('/rooms/'+id)
        .then((res) => {
            callbackSuccess(res.data)
        })
        .catch((e) => {
            callbackFailure(e)
        })
}

export default getAllRooms