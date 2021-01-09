var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./Develop/public")));


//routes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
    
    
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});


//listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });