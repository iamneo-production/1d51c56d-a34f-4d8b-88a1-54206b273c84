const pool = require('../../database')
async function getUserInfo(type, email) {
  try {
    let users;
    let schema;
    if (type === 'doctor') {
      [users, schema] = await pool.query('Select * from DocInfo where email=?', [email])
    } else {
      [users, schema] = await pool.query('Select * from PatientInfo where id=?', [email])
    }
    return users
  } catch (e) {
    console.log(e)
  }
}

module.exports = getUserInfo
