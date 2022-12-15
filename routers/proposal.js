const express = require('express');
const router = new express.Router();
const Proposal = require("../models/proposal.model");



//create proposal
router.post('/api/proposal', async (req, res) => {
    try {
        const prop = new Proposal(req.body);

        const createprop = await prop.save();
        res.status(200).send(createprop);

    } catch (e) {
        res.status(400).send(e);
    }

})

//read the data of proposals
router.get("/api/proposal", async (req, res) => {
    try {
        const propsData = await Proposal.find();
        res.send(propsData);


    } catch (e) {
        res.send(e);
    }
})

//get the individual proposal data using id

router.get("/api/proposal/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const propsData = await Proposal.findById(_id);

        if (!propsData) {
            return res.status(404).send();
        } else {

            res.send(propsData);
        }

    } catch (e) {
        res.send(e);

    }
})




//update proposal by it's id

router.patch('/api/proposal/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateProp = await Proposal.findByIdAndUpdate(_id, req.body);
        res.send(updateProp);
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete proposal by its id

router.delete("/api/proposal/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteProp = await Proposal.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteProp);
        }

    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;