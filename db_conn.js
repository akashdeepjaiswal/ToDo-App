const mongoose = require("mongoose");

var db = mongoose
  .connect("mongodb://localhost:27017/todo_list_DB1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose DB Connection Successfull on 27017"))
  .catch((err) => {
    console.error(err);
  });

  module.exports =db;
