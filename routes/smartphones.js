const express = require('express')
const smartphonesController = require('../controllers/smartphones')

const smartphonesRouter = ({connection}) => {
  const router = express.Router()
  
  router.get('/', smartphonesController.index.bind(null, connection))
  router.get('/delete/:idsmartphones', smartphonesController.deleteOne.bind(null, connection)) 
  router.get('/create', smartphonesController.createForm)
  router.post('/create', smartphonesController.createProcess.bind(null, connection))
  router.get('/update/:idsmartphones', smartphonesController.updateForm.bind(null, connection) )
  router.post('/update/:idsmartphones', smartphonesController.updateProcess.bind(null, connection) )
  return router
}


module.exports = smartphonesRouter