const fs = require("fs");
let notesArray = require("../db/db.json")

module.exports = function(app) {

//gets json file
  app.get("/api/notes", function(req,res){
    return res.json(notesArray)})

//posts a new note to array with an id
  app.post("/api/notes",function(req,res){
    const newNote = req.body

    if (notesArray.length === 0){newNote.id = 1} 
    else {newNote.id = (notesArray[notesArray.length-1].id + 1)}
    
    notesArray.push(newNote);

    let jsonNotes = JSON.stringify(notesArray)

    fs.writeFile("./db/db.json", jsonNotes, function(err) {
      if(err) throw err
      console.log("Note saved");
    })

    res.json(true)

  })

//deletes note from array depending on object 
  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;

    notesArray.forEach((selectedNote, idNum) => {
      if(id == selectedNote.id){notesArray.splice(idNum,1)

        const dbFile = notesArray.slice();

        console.log(dbFile)

        let jsonNotes = JSON.stringify(dbFile)

        fs.writeFile("./db/db.json", jsonNotes, function(err) {if (err) throw err; console.log("Note deleted");})
      }
    })
    res.json(true);
  })
}