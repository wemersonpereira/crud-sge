const express = require('express')
const LinhaController = require('../controllers/linhas')

const linhasRouter = ({connection}) => {
  const router = express.Router()
  
  router.get('/', LinhaController.index.bind(null, connection))
  router.get('/delete/:idlinhas', LinhaController.deleteOne.bind(null, connection)) 
  router.get('/create', LinhaController.createForm)
  router.post('/create', LinhaController.createProcess.bind(null, connection))
  router.get('/update/:idlinhas', LinhaController.updateForm.bind(null, connection) )
  router.post('/update/:idlinhas', LinhaController.updateProcess.bind(null, connection) )
  return router
}


module.exports = linhasRouter