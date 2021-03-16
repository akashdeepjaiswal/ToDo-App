const express = require('express');
const cors = require('cors');
// const bodyParser= require('body-parser')
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const notesRouter = require('./routes/notes');

app.use('/notes', notesRouter);

app.use(express.static('../client/build'));
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});





















// const express = require("express");
// const mongoose = require("mongoose");
// const mongoose_connection= require("./db_conn");
// // const bodyParser = require("body-parser");

// const app = express();

// const noteSchema = new mongoose.Schema({
//     title: {
//         type:String,
//         required: true    
//     },
//     content: {
//         type:String,
//         required: true 
//     }
// })

// const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//     //name: "grapes",
//     title: "jnjbjbjb",
//     content: "rame is bad"
// });

// //   note.save(function(err){
// //     if(err){
// //                  console.log(err);
// //              }   
// //              else{
// //                  console.log("success updated");
// //              }         
// //   });

// app.get("/api/getdata",function(req,res){   
//     Note.find({},function(err,data){  
//                if(err){  
//                    res.send(err);  
//                }  
//                else{             
//                    res.send(data);  
//                    }  
//            });  
//    })

// app.get("/",function(req,res){
//     res.send("Express Running")
// })






// app.listen(5000, function () {
//   console.log("Server started on port 5000");
// });
