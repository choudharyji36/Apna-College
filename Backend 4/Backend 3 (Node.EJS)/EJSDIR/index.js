const express = require("express");
const app = express ();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
//  const followers = ["HTML","CSS","JAVASCRIPT","Backend"];
  let {username} = req.params;
const instaData = require("./data (1).json");
// console.log(instaData);
 const data = instaData[username];
//  console.log(data);
if(data){
res.render("Instagram.ejs", { data }); //,{username,followers}//: instaData[username
} else {
   res.render("error.ejs"); 
}
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceval = Math.floor (Math.random() * 6) + 1
    res.render("rolldice.ejs", { diceval }); //num:diceval
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});