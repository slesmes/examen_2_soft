const { response } = require('../app');
const usermodel = require('../models/user')
//arrow
// async= asincronia = mientras se genera una respuesta ir avanzando en otros procesos
//await
const createUser = async(req, res) => {
    try{
        const userData = req.body;
        console.log(userData)
        const newUser = new usermodel({...userData});
        console.log(newUser)
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}; 
const getAllUsers = async (req, res) => {
    try{
        const AllUsers = await  usermodel.find();
        res.status(200).json(AllUsers)
    } catch(err){
        res.status(400).json({message : err.message})
    }
}
const getUserByid = async (req, res) => {
    try{
        const {id} = req.params;
        const userfind = await usermodel.findById(id);
        console.log(userfind);
        res.status(200).json(userfind)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const updateUserByid = async (req, res) => {
    try{
        const {id} = req.params;
        const userDataEdit = req.body;
        const response = await usermodel.findByIdAndUpdate(id, userDataEdit)
        res.status(200).json(response)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

const deleteUserByid = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await usermodel.findByIdAndDelete(id);
        res.status(200).json({message: "usuario eliminado exitosamente"})
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

module.exports= {
    createUser,
    getAllUsers,
    getUserByid,
    updateUserByid,
    deleteUserByid,
}
//anonima
/* const create = function(){}  */
//estandar
/* async function createUser1(){} */