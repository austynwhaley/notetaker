var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./Develop/public")));


let notes = [{
    id: "",
    title: "First note",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, illo ratione magnam perferendis consequuntur enim! Eaque, rerum libero, tempore distinctio natus omnis, necessitatibus facilis earum molestias dolorem voluptates similique sequi."
},
{
    id: "",
    title: "Second note",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, illo ratione magnam perferendis consequuntur enim! Eaque, rerum libero, tempore distinctio natus omnis, necessitatibus facilis earum molestias dolorem voluptates similique sequi."
}
]


//routes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
    
    
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/api/notes", function(req,res){
    return res.json(notes)

})

app.post("/api/notes",function(){
    
})

app.delete("/api/notes/:id", function(req,res){
  var deleted = req.params.id
  console.log(deleted);

})


//listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

