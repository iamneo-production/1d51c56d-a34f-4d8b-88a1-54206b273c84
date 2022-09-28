const pool = require('../../database')
const { MakeHistory } = require('./MakeHistory')

// async function Search(req, res) {
//   try {
//     const [search,schema] = await pool.query(
//       `Select name, id, profile, bio, treatment, hospital, fees from DocInfo where treatment='${req.body.search}' OR treatment2='${req.body.search}' OR treatment3='${req.body.search}' OR treatment4='${req.body.search}'`
//     )
//     if (req.body.users) {
//       await MakeHistory(req.body.users.id, req.body.search)
//     }
//     res.json({ result: search })
//   } catch (e) {
//     console.log(e)
//     req.json({ error: 'Search Result Not Found' })
//   }
// }
// module.exports = Search
