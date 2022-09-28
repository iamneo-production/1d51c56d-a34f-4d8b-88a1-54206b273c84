const bcrypt = require('bcryptjs')
const pool = require('../../database')
const jwt = require('jsonwebtoken')
const getUserInfo = require('../utils/users')

const login = async (email, password, res) => {
  const [user, sch] = await pool.query('SELECT * FROM users WHERE email=?', [email])
  if (user.length == 0) {
    return res.json({
      error: 'No user with these credentials found.',
    })
  } else {
    bcrypt.hash(password, user[0].salt, (err, hash) => {
      if (err) {
        return res.json({
          error: 'We are not able to log you in, please try again later..',
        })
      } else {
        if (hash == user[0].hash) {
          jwt.sign(
            { password: password },
            '$2a$10$.35wejE4Ovk69/8BmljGHO',
            async function (err, token) {
              if (err) {
                return res.json({
                  error: 'Sorry, We could not log you in, try after some time.',
                })
              } else {
                try {
                  //const tok = [...user[0].token, token]
                  pool
                    .query('UPDATE users SET token = ? WHERE email =? ', [
                      token,
                      email,
                    ])
                    .then(async (response, err) => {
                      if (err) throw new Error('asdf')
                      const users = await getUserInfo(
                        user[0].type,
                        user[0].id,
                      )
                      const k =
                        users && users[0]
                          ? users[0]
                          : {
                              name: user[0].name,
                              email: user[0].email,
                              type: user[0].type,
                              id: user[0].id,
                            }
                      console.log(k)
                      res.json({
                        id: user[0].id,
                        token: token,
                        type: user[0].type,
                        user: k,
                      })
                    })
                } catch (e) {
                  return res.json({
                    error:
                      'Sorry, We could not log you in, try after some time.',
                  })
                }
              }
            },
          )
        } else {
          res.json({
            error: 'Incorrect Password',
          })
        }
      }
    })
  }
}

module.exports = login
