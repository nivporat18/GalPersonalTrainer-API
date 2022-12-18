const router = require('express').Router()


const {createContact,getAllContact,getOneContact,updateContact,deleteContact} = require('../Controllers/ContactController')


router.post('/',createContact)
router.get('/',getAllContact)
router.get('/:id',getOneContact)
router.put("/:id",updateContact)
router.delete("/:id",deleteContact)






module.exports = router