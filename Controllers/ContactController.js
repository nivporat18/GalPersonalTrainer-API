const ContactModel = require('../Models/ContactModel')



module.exports = {
    createContact: async (req,res)=>{
        const newContact = new ContactModel({
           FullName:req.body.FullName,
           email:req.body.email,
           phoneNumber:req.body.phoneNumber,
           message:req.body.message
        })

        try{
            const createContact= await newContact.save()
            res.status(200).send(createContact)
        }catch(error){
            res.status(500).json(error)
        }
    },


    getAllContact: async (req,res)=>{
        try{
            const findAllContact = await ContactModel.find()
            res.status(200).json(findAllContact)
        }catch(error){
            res.status(500).json(`ERROR: ${error}`)
        }
        
    },


    getOneContact: async (req,res)=>{
        try{
            const id = req.params.id
            const findOneContact = await ContactModel.findById(id)
            res.status(200).json(findOneContact)
        }catch(error){
            res.status(500).json(error)
        }
     
    },


    updateContact: async (req,res)=>{
        try{
            const id = req.params.id
            const updateContactId= await ContactModel.updateOne({_id:id},req.body)
            res.status(200).json(`Contact ${id} updated!`)
        }catch(error){
            res.status(500).json(error)
        }
    },

    deleteContact: async (req,res)=>{
        try{
            const id = req.params.id
            const deleteContactId = await ContactModel.remove({_id:id})
            res.status(200).json(`Contact ${id} deleted!`)
        }catch(error){
            res.status(500).json(error)
        }
    }
}