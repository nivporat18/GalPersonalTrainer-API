const mongoose = require('mongoose')


const BeforeAndAfterSchema = new mongoose.Schema({
    imgBefore:{
        type:String,
        required:true
    },

    imgAfter:{
        type:String,
    },

    description:{
        type:String,
    }
},
    {timestamps:true}
)



module.exports = mongoose.model("BeforeAndAfter",BeforeAndAfterSchema)