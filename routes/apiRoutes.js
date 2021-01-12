const fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", function(req,res){
    return res.json(notes)

  })

  app.post("/api/notes",function(){
    
  })

  app.delete("/api/notes/:id", function(req,res){
  var deleted = req.params.id
  console.log(deleted);

  })
    
};