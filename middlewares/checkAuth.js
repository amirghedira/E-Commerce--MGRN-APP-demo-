const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {



    if (!req.headers.authorization) {
        req.isAuth = false;
        return next()
    }

    const token = req.headers.authorization.split(' ')[1];
    console.log(token)
    if (!token || token == '') {
        req.isAuth = false;
        return next()
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = user;
        req.isAuth = true

    } catch (error) {

        req.isAuth = false;
    }
    return next()
}