const express = require('express')
const FuncionarioController = require('../controllers/funcionarios')

const funcionariosRouter = ({connection}) => {
  const router = express.Router()
  
  router.get('/', FuncionarioController.index.bind(null, connection))
  router.get('/delete/:idfuncionarios', FuncionarioController.deleteOne.bind(null, connection)) 
  router.get('/create', FuncionarioController.createForm)
  router.post('/create', FuncionarioController.createProcess.bind(null, connection))
  router.get('/update/:idfuncionarios', FuncionarioController.updateForm.bind(null, connection) )
  router.post('/update/:idfuncionarios', FuncionarioController.updateProcess.bind(null, connection) )
  return router
}


module.exports = funcionariosRouter