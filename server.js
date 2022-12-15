const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require("./routers/user");
const proposalRouter = require("./routers/proposal");
const roomRouter = require("./routers/room");
const boarderRouter = require("./routers/boarder");

const port = process.env.PORT || 8000;
const app = express();

//conncet to mongodb
mongoose.connect("mongodb://localhost:27017/Nehru", {
    useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => console.log("connection successful...")).catch((err) => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(userRouter);
app.use(proposalRouter);
app.use(roomRouter);
app.use(boarderRouter);




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})