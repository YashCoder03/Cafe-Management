const jwt = require("jsonwebtoken")

const jwtAuth = (req,res,next) =>{
    const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }


  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const email = decoded.email;
    res.json({email});
  });
}

module.exports = {jwtAuth}