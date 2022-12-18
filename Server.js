const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')




mongoose.connect(`mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ac-4nfjuri-shard-00-00.x8tobbw.mongodb.net:27017,ac-4nfjuri-shard-00-01.x8tobbw.mongodb.net:27017,ac-4nfjuri-shard-00-02.x8tobbw.mongodb.net:27017/?ssl=true&replicaSet=atlas-b7jfot-shard-0&authSource=admin&retryWrites=true&w=majority`,{},()=>{
    console.log('MongoDB is connected')
})

dotenv.config()
app.use(express.json())
app.use(cors())



const VideoTrainingRouter = require('./Routes/VideoTrainingRouter')
app.use('/api/videotraining',VideoTrainingRouter)

const BeforeAndAfter = require('./Routes/BeforeAndAfterRouter')
app.use('/api/before&after',BeforeAndAfter)

const ContactRouter = require('./Routes/ContactRouter')
app.use('/api/contact',ContactRouter)


app.get('/',(req,res)=>{
    res.send("Go TO API")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})