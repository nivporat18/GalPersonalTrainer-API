const VideoTrainingModel = require('../Models/VideoTrainingModel')



module.exports = {
    createVideoTraining: async (req,res)=>{
        const newVideo = new VideoTrainingModel({
           video:req.body.video,
           description:req.body.description
        })

        try{
            const createVideo = await newVideo.save()
            res.status(200).send(createVideo)
        }catch(error){
            res.status(500).json(error)
        }
    },


    getAllVideoTraining: async (req,res)=>{
        try{
            const findAllVideo = await VideoTrainingModel.find()
            res.status(200).json(findAllVideo)
        }catch(error){
            res.status(500).json(`ERROR: ${error}`)
        }
        
    },


    getOneVideoTraining: async (req,res)=>{
        try{
            const id = req.params.id
            const findOneVideo = await VideoTrainingModel.findById(id)
            res.status(200).json(findOneVideo)
        }catch(error){
            res.status(500).json(error)
        }
     
    },


    updateVideoTraining: async (req,res)=>{
        try{
            const id = req.params.id
            const updateVideoTraining = await VideoTrainingModel.updateOne({_id:id},req.body)
            res.status(200).json(`video ${id} updated!`)
        }catch(error){
            res.status(500).json(error)
        }
    },

    deleteVideoTraining: async (req,res)=>{
        try{
            const id = req.params.id
            const deleteVideo = await VideoTrainingModel.remove({_id:id})
            res.status(200).json(`video ${id} deleted!`)
        }catch(error){
            res.status(500).json(error)
        }
    }
}