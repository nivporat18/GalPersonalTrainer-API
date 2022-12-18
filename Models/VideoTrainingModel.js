const mongoose = require('mongoose')


const videoTrainingSchema = new mongoose.Schema({
    video:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    }
},
    {timestamps:true}
)



module.exports = mongoose.model("VideoTraining",videoTrainingSchema)