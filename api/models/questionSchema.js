const mongoose = require("mongoose");

const questionModel = new mongoose.Schema({
    question: {type:String},
    op1: {type:String},
    op2: {type:String},
    op3: {type:String},
    op4: {type:String},
    ans: {type:String}
});

const Questions = mongoose.model("Questions", questionModel);

module.exports = Questions;