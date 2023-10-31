const { json } = require("express");
const usermodel = require("../models/user");
const {generateToken, refreshToken} = require("../utils/jwt");
const bcrypt = require("bcrypt");

// crear la funcion para el registro - signin
const signin = async (req, res) => {
    const {firstname, lastname, email, current_password} = req.body
    try {
        if(!email){
            res.status(400).json({message: "el email es requerido"})
            throw new Error("el email es requerido");
        }
        if(!current_password){
            res.status(400).json({message: "la contraseña es requerida"})
            throw new Error("la contraseña es requerida");
        }
        const emailLowerCase = email.toLowerCase();
        const salt = await bcrypt.genSalt(10)
        const current_password_hash = await bcrypt.hash(current_password, salt);
        const userData = req.body;
        console.log(emailLowerCase, current_password_hash);
        const newUser = await usermodel.create({
            firstname,
            lastname,
            email: emailLowerCase,
            current_password: current_password_hash,
        });
        const userStorage = await newUser.save()
        res.status(201).json(userStorage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const login = async (req, res) => {
    const { email, current_password } = req.body;
    console.log(req.body)
    try {
        if (!email || !current_password) {
            throw new Error("el email y la contraseña son obligatorios");
        }
        const emailLowerCase = email.toLowerCase();
        console.log(emailLowerCase);
        const userStore = await usermodel.findOne({ email: emailLowerCase }).exec();

        if (!userStore) {
            throw new Error("el usuario no existe")
        }

        const check = await bcrypt.compare(
            current_password,
            userStore.current_password
        );

        if (!check) {
            throw new Error("la contraseña no es correcta")
        }

        const token = generateToken(userStore);
        const refresh = refreshToken(userStore);
        res.status(200).json({
            access: token,
            refresh: refresh,
        })
        console.log(token);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getMe = async(req,res) => {
    try{
        const {id} = req.params;
        const userfind = await usermodel.findById(id);
        console.log(userfind);
        //obtener token del usuario
        res.status(200).json(userfind)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

module.exports = {
    signin,
    login,
    getMe,
}