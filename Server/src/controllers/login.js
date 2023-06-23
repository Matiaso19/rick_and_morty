const users = require('../utils/users');


const getLogin = (req, res) => {
    let access = false;

    const { email, password } = req.query;
    const autorizado = users.find(user => user.email === email && user.password === password)
    autorizado ? access = true : access = false;
    

    return res.status(200).json({access})


}

module.exports = getLogin;