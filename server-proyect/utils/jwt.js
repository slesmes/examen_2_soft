const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const expirateToken = new Date();
    // de la variable que contiene la fecha actual, se consulta la hora
    expirateToken.setHours(expirateToken.getHours()+1);
    //generar el payload del jwwt
    const payload = {
        id: user._id,
        email: user.email,
        iat: Date.now(),
        exp: parseInt(expirateToken.getTime() / 1000),
    };
    //generamos el token
    const access = jwt.sign(JSON.stringify(payload), process.env.SECRET_KEY);
    return access
};

const refreshToken = (user) => {
    console.log(user);
    const expirateToken = new Date();
    //actualizamos cada el mes token
    expirateToken.setMonth(expirateToken.getHours()+1);
    const payload = {
        id: user._id,
        email: user.email,
        iat: Date.now(),
        exp: expirateToken.getTime,
    };
    const refresh = jwt.sign(JSON.stringify(payload), process.env.SECRET_KEY);
    return refresh
} 

const decodeAccessToken = (token) => {
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    return verifyToken
}

module.exports = {
    generateToken,
    refreshToken,
    decodeAccessToken
};