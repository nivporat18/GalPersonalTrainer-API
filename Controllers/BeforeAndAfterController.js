const BeforeAndAfter = require('../Models/BeforeAndAfterModels')



module.exports = {
    createImg: async (req,res)=>{
        const newImg = new BeforeAndAfter({
           imgBefore:req.body.imgBefore,
           imgAfter:req.body.imgAfter,
           description:req.body.description
        })

        try{
            const createImg= await newImg.save()
            res.status(200).send(createImg)
        }catch(error){
            res.status(500).json(error)
        }
    },


    getAllImgs: async (req,res)=>{
        try{
            const findAllImgs = await BeforeAndAfter.find()
            res.status(200).json(findAllImgs)
        }catch(error){
            res.status(500).json(`ERROR: ${error}`)
        }
        
    },


    getOneImg: async (req,res)=>{
        try{
            const id = req.params.id
            const findOneImg = await BeforeAndAfter.findById(id)
            res.status(200).json(findOneImg)
        }catch(error){
            res.status(500).json(error)
        }
     
    },


    updateImg: async (req,res)=>{
        try{
            const id = req.params.id
            const updateImgId = await BeforeAndAfter.updateOne({_id:id},req.body)
            res.status(200).json(`Img ${id} updated!`)
        }catch(error){
            res.status(500).json(error)
        }
    },

    deleteImg: async (req,res)=>{
        try{
            const id = req.params.id
            const deleteImgId = await BeforeAndAfter.remove({_id:id})
            res.status(200).json(`video ${id} deleted!`)
        }catch(error){
            res.status(500).json(error)
        }
    }
}