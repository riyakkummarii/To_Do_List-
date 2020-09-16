const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

//console.log(date);
//console.log(date());

const items=[];
const workItems=[];

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs'); //This assumes a views directory containing an index.ejs page.Since we are making a to do list we name it list.ejs
app.get("/", function(req, res) {

const day =date.getDate();

//renders to list.ejs page
  res.render("list", {
    listTitle: day,
    newListItems : items
  });
});



app.post("/",function(req, res)
{
   const item= req.body.newItem;
   //console.log(req.body.listButton);
  if(req.body.listButton === "Work")// after white space it ignores value so work is given instead of worklist
  {
    workItems.push(item);

    res.redirect("/work");
  }
  else {
    items.push(item);

    res.redirect("/");
  }

});

app.get("/work",function (req, res){
  res.render("list", {
    listTitle: "Work List",
    newListItems : workItems
  });
});
app.get("/about",function (req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
