const smartphones = require('../models/smartphones')

const index = async(connection, req, res) => {
  const results = await smartphones.findAll(connection)
  res.render('smartphones/index', {smartphones: results})
  
}
const deleteOne = async(connection, req, res) => {
  await smartphones.deleteOne(connection, req.params.idsmartphones)
  res.redirect('/smartphones')
}

const createForm = (req, res) => {
  res.render('smartphones/create')
}

const createProcess = async(connection, req, res) => {
  await smartphones.create(connection, req.body)
  res.redirect('/smartphones')
}

const updateForm = async(connection,req, res) => {
  const smartphone = await smartphones.findById(connection, req.params.idsmartphones)
  res.render('smartphones/update', {smartphone})
}

const updateProcess = async(connection, req, res) => {
  await smartphones.update(connection, req.params.idsmartphones, req.body)
  res.redirect('/smartphones')
}

module.exports = {
  index,
  deleteOne,
  createForm,
  createProcess,
  updateForm,
  updateProcess
}