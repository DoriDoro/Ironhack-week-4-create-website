const express = require("express");
const server = express();
const hbs = require("hbs");
const path = require("path");


server.use(express.static(path.join(__dirname, "public")));

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views/partials"));

server.get("/", (req, res) => {
    res.render("index");
});

server.get("/about", (req, res) => {
    res.render("about");
});

server.get("/basics", (req, res) => {
    res.render("basics");
});

server.get("/contact", (req, res) => {
    res.render("contact");
});


const listener = server.listen(5000, ()=> {
    console.log(`server is up @ http://localhost: ${listener.address().port}`);
});



