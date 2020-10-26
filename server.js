const express = require("express");
const app = express();
const albums = require("./albums");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // before our routes definition

app.get("/albums", function (req, res) {
  res.json(albums);
});
app.get("/songs", function (req, res) {
  res.json(albums);
});
app.get("/albums/:albumId", function (req, res) {
  const { albumId } = req.params;
  const choiceAlbum = albums.find((album) => album.albumId == albumId);
  res.json(choiceAlbum);
});

// notice .post (not .get)
app.post("/albums", function (req, res) {
    albums.push(req.body);
    res.json({ success: true });
//   console.log("POST /albums route");
//   console.log(req.body);
});

// notice .delete
app.delete("/albums/:albumID", function (req, res) {
//   console.log("DELETE /albums route");
// albums.forEach
});



app.listen(3000);
console.log("We're listening");
