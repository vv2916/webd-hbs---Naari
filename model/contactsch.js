const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email : {
        type : String,
        required: true,
        unique: true
    },
    message:{
        type: String,
        required:true
    }
})
let user = new mongoose.model("User", schema)

// add user
let add = (name, email, message) => {
    let usr = new user({
        name : name,
        email : email, 
        message : message
    })

    usr.save()
}


module.exports = user
