const pool = require('../../database')

async function GetAppointment(req, res) {
  try {
    if (req.body.doc_id) {
      const d = new Date()
      d.setDate(d.getDate() + 3)
      const [appointments,schema] = await pool.query(
        `SELECT * from Appointment where(timestamp>='${req.body.timestamp}' AND timestamp<='${d.getTime()}'AND doc_id='${req.body.doc_id}' AND ended='false') order by timestamp`
      )
      res.json({ bookings: appointments.rows })
    } else {
      const d = new Date()
      d.setDate(d.getDate() + 3)
      const [appointments,schema] = await pool.query(
        `SELECT * from Appointment where(timestamp>='${req.body.timestamp}' AND timestamp<='${d.getTime()}' AND user_id='${req.body.user_id}' AND ended='false') order by timestamp`
      )
      res.json({ bookings: appointments.rows })
    }
  } catch (e) {
    console.log(e)
    res.json({ error: 'Error! Unable to retrieve information' })
  }
}

async function GetPreviousAppointment(req, res) {

  console.log(req.body);

  try {
    if (req.body.doc_id) {
      const [appointments, schema] = await pool.query(
        `SELECT * from Appointment where(((timestamp<'${req.body.lowerstamp}') AND doc_id='${req.body.doc_id}') OR (ended='true' AND doc_id='${req.body.doc_id}')) order by timestamp desc limit 10`
      )
      res.json({ bookings: appointments })
    } else {
      const [appointments, schema] = await pool.query(
        `SELECT * from Appointment where(((timestamp<'${req.body.lowerstamp}') AND user_id='${req.body.user_id}') OR (ended='true' AND user_id='${req.body.user_id}')) order by timestamp desc limit 10`
      )
      res.json({ bookings: appointments })
    }
  } catch (e) {
    console.log(e)
    res.json({ error: 'Error! Unable to retrieve information' })
  }
}

module.exports = { GetAppointment, GetPreviousAppointment }
