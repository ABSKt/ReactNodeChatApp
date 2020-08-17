const express = require('express')
const Room = require('../model/Rooms')
const auth = require('../middleware/auth')
const router = express.Router()

router.post('/room', auth, async (req, res)=>{
    const room = new Room({
        ...req.body,
        owner: req.user._id
    })
    console.log(room)
    try {
        await room.save()
        res.status(200).send(room)
    }
    catch(e) {
        res.status(400).send(e)
    }
})

router.get('/rooms/:id', auth, async(req, res)=>{
    const rooms = await Room.find({owner: req.params.id})
    if(rooms) {
        res.status(200).send(rooms)
    }
    else{
        res.status(404).send('No rooms yet')
    }
})

module.exports = router