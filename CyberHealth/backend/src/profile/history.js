const pool = require('../../database')
async function history(req, res) {
  try {
    const u = await pool.query(
      'Insert into history(user_id, timestamp, link, name, info) values($1, $2, $3, $4, $5)',
      [
        req.body.user_id,
        req.body.timestamp,
        req.body.link,
        req.body.name,
        req.body.info,
      ],
    )
    res.json({ success: 'uploaded!' })
  } catch (e) {
    console.log(e)
    res.json({ error: 'Unable to upload' })
  }
}

async function getHistory(req, res) {
  try {
    const [u,schema] = await pool.query(
      'SElECT * from Availability where(user_id=? and doc_id=?)',
      [req.body.user_id, req.body.doc_id],
    )
    if (u.length === 0 && req.body.user_id !== req.body.doc_id)
      res.json([])
    else {
      const [history,schema] = await pool.query(
        'SELECT * from History where(user_id=?) order by timestamp desc',
        [req.body.user_id],
      )
      console.log(history)
      res.json(history)
    }
  } catch (e) {
    console.log(e)
    res.json({ error: 'Unable to Retrieve!' })
  }
}

module.exports = { history, getHistory }
