const fs = require("fs");

module.exports = function(app) {

  let notes = require("../db/db.json")

  app.get("/api/notes", function(req,res){
    return res.json(notes)})

  app.post("/api/notes",function(req,res){

    const newNote = req.body

    if (notes.length === 0){newNote.id = 1} 
    else {newNote.id = (notes[notes.length-1].id + 1)}
    

    notes.push(newNote);

    let jsonNotes = JSON.stringify(notes)

    fs.writeFile("./db/db.json", jsonNotes, function(err) {
      if(err) throw err
      console.log("Note saved");
    })

    res.json(true)

  })

  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    notes.forEach((selectedNote, index) => {
      if(id == selectedNote.id){
        notes.splice(index,1)
        const dbFile = notes.slice();
        console.log(dbFile)
        let jsonNotes = JSON.stringify(dbFile)
        fs.writeFile("./db/db.json", jsonNotes, function(err) {
          if (err) {return console.log(err);}

          console.log("Note deleted");
        })
        }
    })
    res.json(true);
  })
}