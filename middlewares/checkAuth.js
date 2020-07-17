const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {



    if (!req.headers.authorization) {
        req.isAuth = false;
        next()
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token || token == '') {
        req.isAuth = false;
        next()
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = user;
        req.isAuth = true

    } catch (error) {

        req.isAuth = false;
    }
    next()
}