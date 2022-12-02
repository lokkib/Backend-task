const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
  },
  userBooks: 
    [{
      title: {
        type: String,
        required: true,
        minlength: 2,
      },
      author: {
        type: String,
        required: true,
        minlength: 2,
      },
      date: {
        type: Number,
        required: true,
      },
    }]
  
});

module.exports = mongoose.model("user", userSchema);
