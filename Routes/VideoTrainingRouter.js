const router = require('express').Router()
const {createVideoTraining,getAllVideoTraining,getOneVideoTraining,updateVideoTraining,deleteVideoTraining} = require('../Controllers/VideoTrainingController')


router.post('/',createVideoTraining)
router.get('/',getAllVideoTraining)
router.get('/:id',getOneVideoTraining)
router.put("/:id",updateVideoTraining)
router.delete("/:id",deleteVideoTraining)



module.exports = router