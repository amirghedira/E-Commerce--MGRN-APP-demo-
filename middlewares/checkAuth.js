const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {



    if (!req.headers.authorization) {
        req.isAuth = false;
        return next()
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!token || token == '') {
        req.isAuth = false;
        return next()
    }

    try {
        const user = jwt.verify(token, "140e54d6fce937d08ed72453d0e9be5aba96f754325fa29b63035ed3f36949fd661d7b43eb0ce70e15fe6b2a986a5d466e8d9587b5c04e8a4cb9998595aaed4e")
        req.user = user;
        req.isAuth = true

    } catch (error) {

        req.isAuth = false;
    }
    return next()
}