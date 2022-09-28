const pool = require('../../database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { CreateSalt } = require('../utils/utils')
const getUserInfo = require('../utils/users')
const update = require('../profile/update')

const register = async (req, res) => {
  const { name, email, password, type, id } = req.body
  console.log(id, name, email, password)
  const [user, schema] = await pool.query('SELECT * FROM users WHERE email=?', [email])



  if (user.length >= 1) {
    console.log('upper');
    return res.json({
      username: '',
      id: id,
      token: '',
      error: 'user already present',
    })
  } else {
    const salt = CreateSalt(10);
    console.log('lower');
    console.log(salt);
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        return res.json({
          error: 'Sorry, We could not create user try after some time.',
        })
      } else {
        jwt.sign(
          { password: password },
          '$2a$10$.35wejE4Ovk69/8BmljGHO',
          async function (err, token) {
            if (err) {
              return res.json({
                error: 'Sorry, We could not create user try after some time.',
              })
            } else {
              try {
                pool
                  .query(
                    `INSERT INTO users(id,name,email,hash,salt,type,token) VALUES('${id}', '${name}', '${email}', '${hash}', '${salt}', '${type}', '${token}') `,
                  )
                  .then(async (response, err) => {
                    req.body.user = { ...req.body }
                    await update(req, res)
                    if (err) throw new Error('asdf')
                    const users = await getUserInfo(type, id)
                    const k =
                      users.rows && users.rows[0]
                        ? users.rows[0]
                        : {
                            name: name,
                            email: email,
                            type: type,
                            id: id,
                          }
                    return res.json({
                      id: id,
                      token: token,
                      type: type,
                      user: k,
                    })
                  })
                  .catch((e) => {
                    console.log(e)
                    return res.json({
                      error:
                        'Sorry, We could not create user try after some time.',
                    })
                  })
              } catch (e) {
                console.log(e)
                return res.json({
                  error: 'Sorry, We could not create user try after some time.',
                })
              }
            }
          },
        )
      }
    })
  }
}

module.exports = register
