const { json } = require("express");
const usermodel = require("../models/user");
const { generateToken, refreshToken } = require("../utils/jwt");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');


const sendEmail = async(toEmail,userStorage) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'santiagolesmesmarin@gmail.com',
            pass: 'krdg uwha jfdi sitl', 
        },
    });

    const mailOptions = {
        from: 'santiagolesmesmarin@gmail.com', 
        to: toEmail,
        subject: "confirmacion para activar tu correo",
        text: `Para activar tu cuenta, por favor da click en el siguiente link: 'http://localhost:3100/api/v1/auth/activate/${userStorage._id}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
        }
    });
};

// crear la funcion para el registro - signin
const signin = async (req, res) => {
    const { firstname, lastname, email, current_password } = req.body;
    try {
        if (!email) {
            return res.status(400).json({ message: "El email es requerido" });
        }
        if (!current_password) {
            return res.status(400).json({ message: "La contraseña es requerida" });
        }
        const emailLowerCase = email.toLowerCase();
        const salt = await bcrypt.genSalt(10);
        const current_password_hash = await bcrypt.hash(current_password, salt);
        const userData = req.body;
        console.log(emailLowerCase, current_password_hash);
        const newUser = await usermodel.create({
            firstname,
            lastname,
            email: emailLowerCase,
            current_password: current_password_hash,
            phone: "3117752691",
        });
        const userStorage = await newUser.save();
        sendEmail(email,userStorage);
        return res.status(201).json(userStorage);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const activate = async (req, res) => {
    try {
        const { id } = req.params;
        const userFind = await usermodel.findById(id);

        userFind.status = true;
        userStore = await userFind.save();


        res.redirect(301, 'http://localhost:3000/login');

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}



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

const getMe = async (req, res) => {
    try {
        const { id } = req.user._doc;
        const userfind = await usermodel.findById(id);
        console.log(userfind);
        //obtener token del usuario
        res.status(200).json(userfind)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    signin,
    login,
    getMe,
    activate,
}