const pool = require('../../database')

async function getSearchHistory(req, res) {
  try {
    const [history, schema] = await pool.query(
      'Select * from SearchHistory where user_id=? order by timestamp desc limit 10',
      [req.body.users.id],
    )
    res.json({ history: history })
  } catch (e) {
    console.log(e)
    res.json('Error! while retrieving Search History')
  }
}

module.exports = getSearchHistory
