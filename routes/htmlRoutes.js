var path = require("path");

module.exports = function(app) {
  //gets home page
  app.get("/", function(req, res) {res.sendFile(path.join(__dirname, "../public/index.html"));});

  //gets notes page
  app.get("/notes", function(req, res) {res.sendFile(path.join(__dirname, "../public/notes.html"));});
};