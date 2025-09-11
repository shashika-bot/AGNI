const mongoose = require("mongoose");
const config = require("../config");
const EnvVar = require("./mongodbenv");

const defaultEnvVariables = [
  { key: "ALIVE_IMG", value: config.ALIVE_IMG },
  { key: "ALIVE_MSG", value: config.ALIVE_MSG },
  { key: "PREFIX", value: "." },
];

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB);
    console.log("🛜 MongoDB Connected ✅");

    for (const envVar of defaultEnvVariables) {
      const existingVar = await EnvVar.findOne({ key: envVar.key });
      if (!existingVar) {
        await EnvVar.create(envVar);
        console.log(`➕ Created default env var: ${envVar.key}`);
      }
    }
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
