const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: false
    },
    username:{
        type: String,
        required: true
    }
})

const UserModel = mongoose.model("Users", UserSchema)

module.exports = userModel