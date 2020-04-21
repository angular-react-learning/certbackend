const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/certification', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});