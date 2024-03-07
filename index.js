const express = require("express");
const app = express();
const path = require("path");
const cookies=require("cookie-parser")

const uipath = path.join(__dirname,"/templates");
app.set("view engine", "hbs");
app.set("views", uipath);

app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(3000)