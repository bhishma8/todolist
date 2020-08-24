
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const date=require(__dirname+"/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs'); //setting up ejs

mongoose.connect("mongoose://localhost:27017/todolistDB",{useNewUrlParser:true});
const itemsSchema={
    name:String
};
const Item=mongoose.model("Item",itemsSchema);

app.get("/", function(req, res){
   
   
    res.render("list",{listTitle:"Today",newListItems:items});
});
app.post("/",function(req,res){
    let item=req.body.newItem;
    if(req.body.list==="Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/"); //There can be only one render so we 
                            //are redirecting our response to the above render
                            //with the values
    }
      
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems});
});

app.get("/about",function(req,res){
    res.render("about");
});



app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

