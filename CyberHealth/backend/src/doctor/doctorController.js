const bcrypt = require('bcryptjs')
const pool = require('../../database')
const jwt = require('jsonwebtoken')
const getUserInfo = require('../utils/users')

exports.getAll = async(req, res) =>{

    const [allDoctors, schema] = await pool.query('select * from DocInfo');

    if(allDoctors.length == 0) return res.status(404).json({
        status: "Not found",
        data: []
    })

    return res.status(200).json({
        status: "Found",
        data: allDoctors
    });
}

exports.getAllByEmail = async(req, res) => {

    console.log(req.params);

    const [allDoctors, schema] = await pool.query('select * from DocInfo where email=?', [req.params.email]);

    console.log(allDoctors);

    if(allDoctors.length == 0) return res.status(404).json({
        status: "Not found",
        data: []
    })

    return res.status(200).json({
        status: "Found",
        data: allDoctors
    });
}


exports.getAllBySpecs = async(req, res) => {

    const [allDoctors, schema] = await pool.query('select * from DocInfo where treatment=?', [req.params.specs]);

    if(allDoctors.length == 0) return res.status(404).json({
        status: "Not found",
        data: []
    })

    return res.status(200).json({
        status: "Found",
        data: allDoctors
    });
}
