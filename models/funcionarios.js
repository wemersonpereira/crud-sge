const findAll = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query('select * from funcionarios', (err, results) => {
      if(err) {
        reject(err)
      }else{
        resolve(results)
      }
      
    })
  })
  
}

const findById = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query('select * from funcionarios where idfuncionarios = '+id, (err, results) => {
      if(err) {
        reject(err)
      }else{
        if(results.length>0) {
          resolve(results[0])
        }else {
          resolve({})
        }
        
      }
      
    })
  })
  
}

const deleteOne = (connection, idfuncionarios) => {
  return new Promise((resolve, reject) => {
    connection.query('delete from funcionarios where idfuncionarios = '
    +idfuncionarios+' limit 1', (err) => {
      if(err) {
        reject(err)
      }else{
        resolve()
      }
    })
  })
}

const create = (connection, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`insert into funcionarios (nome, cpf, matricula, funcao) values ('${data.nome}', '${data.cpf}', ${data.matricula}, '${data.funcao}')`, (err) => {
        if(err) {
          reject(err)
        }else{
          resolve()
        }
     })
  })
}

const update = (connection, idfuncionarios, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`update funcionarios set nome='${data.nome}', cpf='${data.cpf}', matricula=${data.matricula}, funcao='${data.funcao}' where idfuncionarios=${idfuncionarios}`, (err) => {
        if(err) {
          reject(err)
        }else{
          resolve()
        }
     })
  })
}

module.exports = {
  findAll,
  findById,
  deleteOne,
  create,
  update
}