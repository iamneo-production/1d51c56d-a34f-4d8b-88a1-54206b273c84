const pool = require('../../database')

async function MakeHistory(user_id, search) {
  try {
    const timestamp = new Date().getTime()
    await pool.query(
      `Insert into SearchHistory(user_id, searchString, timestamp) values ('${user_id}', '${search}', '${timestamp}')`
    )
  } catch (e) {
    throw new Error()
  }
}

module.exports = {
  MakeHistory,
}
