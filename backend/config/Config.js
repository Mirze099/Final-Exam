import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://mirzarmaf206:mirze2005@exam.weabg.mongodb.net/")
  .then(() => {
    console.log("connected");
  });
