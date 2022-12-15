const express = require('express');
const router = new express.Router();
const User = require("../models/user.model")


//create user
router.post('/api/user', async (req, res) => {
    try {
        const user = new User(req.body);

        const createUser = await user.save();
        res.status(200).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }

})

//read the data of users
router.get("/api/user", async (req, res) => {
    try {
        const usersData = await User.find();
        res.send(usersData);


    } catch (e) {
        res.send(e);
    }
})

//get the individual user's data using id

router.get("/api/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const userData = await User.findById(_id);

        if (!userData) {
            return res.status(404).send();
        } else {

            res.send(userData);
        }

    } catch (e) {
        res.send(e);

    }
})




//update user by it's id

router.patch('/api/user/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateUser = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateUser);
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete user by its id

router.delete("/api/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        } else {
            res.send(deleteUser);
        }

    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;
