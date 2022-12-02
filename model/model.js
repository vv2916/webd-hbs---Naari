const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password : {
        type : String,
        required: true
    }
})

let user = new mongoose.model("User", schema)

// add user
let add = (nm, pass) => {
    let usr = new user({
        username : nm,
        password : pass 
    })

    usr.save()
}


module.exports = user
