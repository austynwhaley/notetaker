const fs = require("fs");

module.exports = function(app) {

  let notes = require("../db/db.json")

  app.get("/api/notes", function(req,res){
    return res.json(notes)})

  app.post("/api/notes",function(req,res){
    const newNote = req.body

    if (notes.length === 0){newNote.id = 1} 

    notes.push(newNote);

    let jsonNotes = JSON.stringify(notes)

    fs.writeFile("./db/db.json", jsonNotes, function(err) {

    console.log("Note saved");

    })

    res.json(true)

  })

  app.delete("/api/notes/:id", function(req,res){
  var deleted = req.params.id
  console.log(deleted);

  })
    
};