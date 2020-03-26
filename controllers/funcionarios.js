const funcionarios = require('../models/funcionarios')

const index = async(connection, req, res) => {
  const results = await funcionarios.findAll(connection)
  res.render('funcionarios/index', {funcionarios: results})
  
}
const deleteOne = async(connection, req, res) => {
  await funcionarios.deleteOne(connection, req.params.idfuncionarios)
  res.redirect('/funcionarios')
}

const createForm = (req, res) => {
  res.render('funcionarios/create')
}

const createProcess = async(connection, req, res) => {
  await funcionarios.create(connection, req.body)
  res.redirect('/funcionarios')
}

const updateForm = async(connection,req, res) => {
  const funcionario = await funcionarios.findById(connection, req.params.idfuncionarios)
  res.render('funcionarios/update', {funcionario})
}

const updateProcess = async(connection, req, res) => {
  await funcionarios.update(connection, req.params.idfuncionarios, req.body)
  res.redirect('/funcionarios')
}

module.exports = {
  index,
  deleteOne,
  createForm,
  createProcess,
  updateForm,
  updateProcess
}