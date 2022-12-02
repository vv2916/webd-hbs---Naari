let Express = require("express")
let path = require("path")
let hbs = require("hbs")
let user = require("./../../model/model.js")
const connectdb = require("../../connection/connectdb.js")
connectdb()
let app = new Express()
app.use(Express.static(path.join(__dirname, '../public')))
app.use(Express.urlencoded({ extended: true}))

app.set("view engine", "hbs")

app.set("views",path.join(__dirname, "../templates/views/"))
hbs.registerPartials(path.join(__dirname, "../templates/partials/"))

app.get("/Naari", (req,res)=>{
    res.render("Naari")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/programs", (req,res)=>{
    res.render("program")

})
app.post("/program", (req, res)=> {
    let email = req.body.email
    let password = req.body.psw
    console.log(email, password)

})
app.get("/consultation", (req,res)=>{
    res.render("consultation")
})

app.get("/experience", (req,res)=>{
    res.render("experience")
})

app.get("/contact", (req,res)=>{
    res.render("contact")
})
app.post("/contact us",(req, res)=>
{let names = req.body.name
 let email = req.body.email
 let message = req.body.message}     )


app.get("/login", (req,res)=>{
    res.render("login")
})

app.get("/signin", (req,res)=>{
    res.render("signin")
})

app.get("/breast", (req,res)=>{
    res.render("breast")
})

app.get("/contra", (req,res)=>{
    res.render("contra")
})

app.get("/diet", (req,res)=>{
    res.render("diet")
})

app.get("/fertility", (req,res)=>{
    res.render("fertility")
})

app.get("/fitness", (req,res)=>{
    res.render("fitness")
})

app.get("/mh", (req,res)=>{
    res.render("mh")
})

app.get("/pcos", (req,res)=>{
    res.render("pcos")
})

app.get("/pregnancy", (req,res)=>{
    res.render("pregnancy")
})

app.post("/login", (req, res) => {
    let usrnm = req.body.username
    let passw = req.body.password
    user.findOne({username: usrnm, password: passw}, function(err, user){
        if(err){
            res.render("login")
        }

        if(!user){
            console.log("Not found", usrnm, passw)
            res.render("login")
        } else {
            console.log("found user")
            res.render("login")
        }
    })
})
/*
app.get("*", (req,res)=>{
    res.render("error")
})
*/

app.listen("3000s", ()=>{
    console.log('connected to server...')
    console.log(__dirname)
})