const linhas = require('../models/linhas')

const index = async(connection, req, res) => {
  const results = await linhas.findAll(connection)
  res.render('linhas/index', {linhas: results})
  
}
const deleteOne = async(connection, req, res) => {
  await linhas.deleteOne(connection, req.params.idlinhas)
  res.redirect('/linhas')
}

const createForm = (req, res) => {
  res.render('linhas/create')
}

const createProcess = async(connection, req, res) => {
  await linhas.create(connection, req.body)
  res.redirect('/linhas')
}

const updateForm = async(connection,req, res) => {
  const linha = await linhas.findById(connection, req.params.idlinhas)
  res.render('linhas/update', {linha})
}

const updateProcess = async(connection, req, res) => {
  await linhas.update(connection, req.params.idlinhas, req.body)
  res.redirect('/linhas')
}

module.exports = {
  index,
  deleteOne,
  createForm,
  createProcess,
  updateForm,
  updateProcess
}