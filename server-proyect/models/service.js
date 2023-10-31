const mongoose = require("mongoose")
const serviceSchema = mongoose.Schema({
    servicename: {
        type: String,
        require: true,
    },
    servicedescription: {
        type: String,
        require: true,
    },
    active: {
        type: Boolean,
        default: true,
        require: true,
    },
    avatar: {
        type: String,
    },
    create_at:{
        type: Date,
        default: Date.now,
        require: true,
    }
    })
const service = mongoose.model("service",serviceSchema)
module.exports = service