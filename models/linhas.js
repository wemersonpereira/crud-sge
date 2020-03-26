const findAll = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query('select * from linhas', (err, results) => {
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
    connection.query('select * from linhas where idlinhas = '+id, (err, results) => {
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

const deleteOne = (connection, idlinhas) => {
  return new Promise((resolve, reject) => {
    connection.query('delete from linhas where idlinhas = '
    +idlinhas+' limit 1', (err) => {
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
    connection.query(`insert into linhas (numero, operadora, DDD) values (${data.numero}, '${data.operadora}', ${data.DDD})`, (err) => {
        if(err) {
          reject(err)
        }else{
          resolve()
        }
     })
  })
}

const update = (connection, idlinhas, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`update linhas set numero=${data.numero}, operadora='${data.operadora}', DDD=${data.DDD} where idlinhas=${idlinhas}`, (err) => {
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