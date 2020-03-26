const findAll = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query('select * from smartphones', (err, results) => {
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
    connection.query('select * from smartphones where idsmartphones = '+id, (err, results) => {
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

const deleteOne = (connection, idsmartphones) => {
  return new Promise((resolve, reject) => {
    connection.query('delete from smartphones where idsmartphones = '
    +idsmartphones+' limit 1', (err) => {
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
    connection.query(`insert into smartphones (marca, modelo, IMEI) values ('${data.marca}', '${data.modelo}', ${data.IMEI})`, (err) => {
        if(err) {
          reject(err)
        }else{
          resolve()
        }
     })
  })
}

const update = (connection, idsmartphones, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`update smartphones set marca='${data.marca}', modelo='${data.modelo}', IMEI=${data.IMEI} where idsmartphones=${idsmartphones}`, (err) => {
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