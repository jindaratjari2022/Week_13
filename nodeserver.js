const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080
 
//Define Variables
var id = 65140322;
var status = "Single";
 
//add Variables
var user_list = [
    {name: "Nester", address: "BKK", birth_year:2003},
    {name: "Jindarat", address: "BKK", birth_year:2001},
    {name: "tommy", address: "BKK", birth_year:2005},
]


//add Feature Bar  variables
var feature = [
    {img : "images/vr 1.jpg",
    top : "Virtual Reality Course",
    bottom : "Enjoy Virtual Reality",},

    {img : "images/programming.jpg",
    top : "Programming Course",
    bottom : "Enjoy code",}
]

//add Navigation Bar
var logo = "images/logo.svg"
var about = "About"
var docs = "Docs"
var login = "Login"

//add contents
var contents = [
    {img : "images/email.svg",
    icon : "jindarat.jari@bumail.net"},

    {img : "images/facebook.svg",
    icon : "jindarat.jari"},

    {img : "images/twitter.svg",
    icon : "jindarat.jari"},

    {img : "images/youtube.svg",
    icon : "Jindarat Jari"},
]

//add content fonts variables
var contentfont1 = "Online Creative Community"
var contentfont2 = "by Jindarat Jari"

//Set &amp; Call EJS
app.set('view engine','ejs')
 
//connect public folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 
 
//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status,
        obj_user_list : user_list})
})
 
//connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2',{
        obj_contents : contents,
        obj_feature : feature,
        contentfont1 : contentfont1,
        contentfont2 : contentfont2,
        logo :logo,
        about : about,
        docs : docs,
        login : login
    })
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})