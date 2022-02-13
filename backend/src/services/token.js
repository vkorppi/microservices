
var jsonwebtoken = require('jsonwebtoken');


const createToken = async (user) => {


    return jsonwebtoken.sign({ name: user.name, username: user.username, email: user.email, address: user.address }, 'secret');
}

const checkToken = async (token) => {

    let success = true

    try {
        jsonwebtoken.verify(token, 'secret')
    }
    catch (err) {
        success = false
    }

    return success
}

const readToken = async (token) => {
    return jsonwebtoken.decode(token)
}



module.exports = {
    createToken,
    checkToken
};