const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
firstname: {
    type: String,
    require: true,
},
lastname: {
    type: String,
    require: true,
},
email: {
    type: String,
    require: true,
    unique: true,
},
current_password: {
    type: String,
    require: true,
},
phone: {
    type: String,
    require: true
},
active:{
    type: Boolean,
    default: false,
}
})

const User = mongoose.model("User",UserSchema)
module.exports = User
