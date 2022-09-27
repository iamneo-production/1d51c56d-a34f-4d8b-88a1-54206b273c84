const jwt = require('jsonwebtoken');
const connection = require('./../db');



const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: 1000
    });
  };
  

const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user.email);
  
    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });
  
    // Remove password from output
    user.password = undefined;
    user.passwordConfirm = undefined;
  
    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
  };
  

exports.signup = async (req, res, next) => {

    try{

        const user = {
            username : req.body.username, 
            email : req.body.email, 
            password: req.body.password, 
            passwordConfirm: req.body.passwordConfirm, 
            role: req.body.role
        };
      
        // check for empty fields
        if(!(user.username || user.email || user.password || user.passwordConfirm || user.role)) return  res.json({
            status: 'Failed',
            token : '',
            data: '',
            errorMessage: 'Payload contains empty data.'
        });

        let [rows, schema] = await (await connection).execute('SELECT * FROM users WHERE email=?', [user.email]);
    
        if(rows.length >= 1) return res.json({
            status: 'Failed',
            token : '',
            data: '',
            errorMessage: 'User already present'
        });
    
        await (await connection).execute(`INSERT INTO users(username,email,password,passwordConfirm,role) VALUES ("${user.username}","${user.email}" , "${user.password}" , "${user.passwordConfirm}", "${user.role}")`);
        
        createSendToken(user, 201, req, res);

    }catch(err){
        console.log(err);
    }

};
