const pool = require('../../database')

async function update(req, res) {
  try {
    if (req.body.type === 'doctor') await updateDoctor(req, res)
    if (req.body.type === 'patient') await updatePatient(req, res)
  } catch (e) {
    console.log(e)
    res.json(e)
    return
  }
}

async function updateDoctor(req, res) {
  try {
    const [doc, schema] = await pool.query('SELECT * from DocInfo where id=?', [
      req.body.user.id,
    ])
   
    console.log('Printing doctor');
    console.log(doc);
    
    const {
      id,
      email,
      name,
      bio,
      timeing,
      days,
      treatment,
      degrees,
      profile,
      cover,
      hospital,
      fees,
    } = req.body.user;

    console.log('printing req.body.userr');
    console.log(req.body.user);

    if (doc.length > 0) {
      const doc = await pool.query(
        'UPDATE DocInfo set bio=?, timeing=?, days=?, treatment=?, degrees=?, profile=?, cover=?, hospital=?, fees=? where id=?',
        [
          bio,
          timeing,
          days,
          treatment,
          degrees,
          profile,
          cover,
          hospital,
          fees,
          id,
        ],
      )
      return
    } else {
      const [doc, schema] = await pool.query(
        `INSERT into DocInfo(id, email, name, bio, timeing, days, treatment, degrees, profile, cover, hospital, fees, type, patients_treated) values(
          '${id}',
          '${email}',
          '${name}',
          '${bio}',
          '${timeing}',
          '${days}',
          '${treatment}',
          '${degrees}',
          '${profile}',
          '${cover}',
          '${hospital}',
          '${fees}',
          'doctor',
          0)`
      )
      return
    }
  } catch (e) {
    console.log(e)
    res.json(e)
  }
}

async function updatePatient(req, res) {
  try {
    const [doc, schmea] = await pool.query('SELECT * from PatientInfo where id=?', [
      req.body.user.id,
    ])
    const { id, email, name, profile, cover } = req.body.user
    if (doc.length > 0) {
      const [doc, schmea] = await pool.query(
        'UPDATE PatientInfo set profile=?, cover=? where id=?',
        [profile, cover, id],
      )
      return
    } else {
      const [doc, schema] = await pool.query(
        `INSERT into PatientInfo(id, email, name, profile, cover, type) values('${id}', '${email}', '${name}', '${profile}', '${cover}', '${req.body.type}')`,
      )
      return
    }
  } catch (e) {
    console.log(e)
    res.json(e)
  }
}

module.exports = update
