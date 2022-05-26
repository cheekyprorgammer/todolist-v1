const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-us", options);

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res) {
  item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});



app.listen(process.env.PORT || 3000, function(){
  console.log("Server Started...");
});
