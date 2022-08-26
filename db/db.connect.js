const mongoose = require("mongoose");
const mongodbURL = process.env.MONGODB_URL;

const initializeDbConnection = async () => {
  try {
    await mongoose.connect(mongodbURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: "always-shopping-db",
    });
    console.log("Successfully connected");
  } catch (error) {
    console.error("mongoose connection failed", error);
  }
};

module.exports = { initializeDbConnection };
