const { response } = require('../app');
const usermodel = require('../models/service')

const createservice = async(req, res) => {
    try{
        const serviceData = req.body;
        console.log(serviceData)
        const newService = new usermodel({...serviceData});
        console.log(newService)
        await newService.save();
        res.status(201).json(newService);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}; 
const getAllService = async (req, res) => {
    try{
        const AllService = await  usermodel.find();
        res.status(200).json(AllService)
    } catch(err){
        res.status(400).json({message : err.message})
    }
}
const getServiceByid = async (req, res) => {
    try{
        const {id} = req.params;
        const servicefind = await usermodel.findById(id);
        console.log(servicefind);
        res.status(200).json(servicefind)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const updateServiceByid = async (req, res) => {
    try{
        const {id} = req.params;
        const serviceDataEdit = req.body;
        const response = await usermodel.findByIdAndUpdate(id, serviceDataEdit)
        res.status(200).json(response)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

const deleteServiceByid = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await usermodel.findByIdAndDelete(id);
        res.status(200).json({message: "servicio eliminado exitosamente"})
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

module.exports= {
    createservice,
    getAllService,
    getServiceByid,
    updateServiceByid,
    deleteServiceByid,
}