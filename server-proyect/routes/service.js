const serviceController = require("../controllers/service")
const express = require("express");
const router = express.Router();
router.post('/new-service', serviceController.createservice);
router.get('/', serviceController.getAllService);
router.get('/:id', serviceController.getServiceByid);
router.put('/:id', serviceController.updateServiceByid);
router.patch('/:id', serviceController.updateServiceByid);
router.delete('/:id', serviceController.deleteServiceByid);
module.exports = router;