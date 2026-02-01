import mongoose from "mongoose";

const connectDb = () => {
  const connection = mongoose.connect(`${process.env.MONGODB_URI}`);
  if (connection) {
    console.log("database connected successfully");
  } else {
    console.log("database error :", connection.error);
  }
};

export default connectDb;
