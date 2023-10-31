const jwt = require("../utils/jwt");
const userModel = require("../models/user")


const ensureAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization || !authorization.startsWith("Bearer")) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authorization.split(" ")[1];
        console.log("token", token);
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModel.findById(decodedToken.id);
        console.log("user", user)
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = {...user};
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = ensureAuth;