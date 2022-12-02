let mongoose = require('mongoose') 
let URI = "mongodb+srv://rishitaojha:root@cluster0.uakizom.mongodb.net/?retryWrites=true&w=majority"
let connectdb = async() => {
    try{
        let con = await mongoose.connect(URI, {
            useUnifiedTopology : true,
            useNewUrlParser: true
        })
        console.log("Connected to the db")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb