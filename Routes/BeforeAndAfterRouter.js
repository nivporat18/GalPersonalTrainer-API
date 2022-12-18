const router = require('express').Router()


const {createImg,getAllImgs,getOneImg,updateImg,deleteImg} = require('../Controllers/BeforeAndAfterController')


router.post('/',createImg)
router.get('/',getAllImgs)
router.get('/:id',getOneImg)
router.put("/:id",updateImg)
router.delete("/:id",deleteImg)






module.exports = router