const mongoose = require("mongoose");

const dbConnect = async () => {
  const mongoUri = process.env.MONGODB_CONNECTION_URL;
  const mongoDB = await mongoose.connect(mongoUri);

  console.log("MongoDB connected");

  return mongoDB;
};

module.exports = dbConnect;
