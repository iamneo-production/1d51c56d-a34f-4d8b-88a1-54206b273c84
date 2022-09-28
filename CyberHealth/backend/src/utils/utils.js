const bcrypt = require('bcryptjs')
const pool = require('../../database')
const getUserInfo = require('./users')

const CreateSalt = (length) => {
  return bcrypt.genSaltSync(length)
}

const isLoggedIn = async (req, res, next) => {
  try {
    const tokens = req.body.session_id
    const token = tokens.split('!id@')[1]
    const id = tokens.split('!id@')[0]
    var k = 0
    const [user,schema] = await pool.query('SELECT * FROM users WHERE id=?', [id])
    if (user.length > 0) {
      try {
        
        if (user[0].token == token) {
          k = 1
        }

        console.log("k : "+k);

        if (k == 1) {
          const users = await getUserInfo(user[0].type, user[0].id);
          req.body.users =
            users && users[0]
              ? users[0]
              : {
                  name: user[0].name,
                  email: user[0].email,
                  type: user[0].type,
                  id: user[0].id,
                }
            
          next()
        } else {
          req.body.error = 'unauthorized'
          next()
        }
      } catch (e) {
        req.body.error = 'unauthorized'
        next()
      }
    } else {
      req.body.error = 'Cannot Retrieve user'
      next()
    }
  } catch (e) {
    req.body.error = 'Cannot Retrieve user'
    next()
  }
}

module.exports = {
  CreateSalt,
  isLoggedIn,
}
