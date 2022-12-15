const express = require('express');
const router = new express.Router();
const Room = require("../models/room.model");
const Boarder = require("../models/boarder.model")


//create room
router.post('/api/room', async (req, res) => {
    try {
        const room = new Room(req.body);
        const boarder = new Boarder(req.body.boarder);
        const createRoom = await room.save();
        const createBoarder = await boarder.save();
        res.status(200).send(createRoom);

    } catch (e) {
        res.status(400).send(e);
    }
})






//read the data of rooms
router.get("/api/room", async (req, res) => {
    try {
        const roomsData = await Room.find();
        res.send(roomsData);


    } catch (e) {
        res.send(e);
    }
})



//get the individual room's data using id

router.get("/api/room/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const roomData = await Room.findById(_id);

        if (!roomData) {
            return res.status(404).send();
        } else {

            res.send(roomData);
        }

    } catch (e) {
        res.send(e);

    }
})



//update room by it's id

router.patch('/api/room/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateRoom = await Room.findByIdAndUpdate(_id, req.body);
        res.send(updateRoom);
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete room by its id

router.delete("/api/room/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteRoom = await Room.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteRoom);
        }

    } catch (e) {
        res.status(500).send(e);
    }
})




module.exports = router;