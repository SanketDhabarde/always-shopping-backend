const mongoose = require("mongoose");
const mongodbUrl = process.env.mongodbURL;

const initializeDbConnection = async () => {
  try {
    await mongoose.connect(mongodbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Successfully connected");
  } catch (error) {
    console.error("mongoose connection failed", error);
  }
};

module.exports = { initializeDbConnection };
