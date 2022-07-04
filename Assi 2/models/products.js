var mongoose = require('mongoose');

var todosSchema = mongoose.Schema({
    todos : String,
    // Img : Image,
   date : String,
    time : String
});

const Todos = mongoose.model("todos", todosSchema);

module.exports = Todos;