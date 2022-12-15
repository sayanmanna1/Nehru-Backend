const express = require('express');
const router = new express.Router();
const Boarder = require("../models/boarder.model");


//create boarder
router.post('/api/boarder', async (req, res) => {
    try {
        const boarder = new Boarder(req.body);

        const createBoarder = await boarder.save();
        res.status(200).send(createBoarder);

    } catch (e) {
        res.status(400).send(e);
    }
})

//read the data of boarders
router.get("/api/boarder", async (req, res) => {
    try {
        const boardersData = await Boarder.find();
        res.send(boardersData);


    } catch (e) {
        res.send(e);
    }
})



//get the individual boarder's data using id

router.get("/api/boarder/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const boarderData = await Boarder.findById(_id);

        if (!boarderData) {
            return res.status(404).send();
        } else {

            res.send(boarderData);
        }

    } catch (e) {
        res.send(e);

    }
})





//update boarder by it's id

router.patch('/api/boarder/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateBoarder = await Boarder.findByIdAndUpdate(_id, req.body);
        res.send(updateBoarder);
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete boarder by its id

router.delete("/api/boarder/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteBoarder = await Boarder.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteBoarder);
        }

    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;