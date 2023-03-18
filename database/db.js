import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Connection = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Connected to Mongoose Successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected to Mongoose");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database ", error.message);
  });
};

export default Connection;
