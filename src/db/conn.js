// To connect with your mongoDB database
const mongoose = require("mongoose");
// Connecting to database
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/utaifportfolio", {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((error) => {
    console.log(error);
  });
