const mongoose = require('mongoose');


const objectid = mongoose.Schema.Types.ObjectId;


//schema
const proposalSchema = new mongoose.Schema(
    {
        date : Date,
        intiated_by : objectid,
        purpose : String,
        detailed_justification : String,
        estimated_budget : Number
    }
)

//create collection
const Proposal = new mongoose.model("Proposal", proposalSchema);


module.exports = Proposal;