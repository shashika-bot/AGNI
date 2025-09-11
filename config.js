const fs = require("fs");

// Load .env if exists
if (fs.existsSync("config.env")) require("dotenv").config({ path: "./config.env" });

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "ZcsWgbTb#xwxajNAZmTOIL-fcc_aZi0CsYDj--JcGn4eGoHU2R9g",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ue4ppc.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 AGNI Is Alive Now😍*",
  BOT_OWNER: process.env.BOT_OWNER || "94776907496",
  
  // Cloud MongoDB URI
  MONGODB: process.env.MONGODB || "mongodb+srv://shashikassss621_db_user:8RqXTKJ0yApk2Yey@agni.lwbyzwb.mongodb.net/agni_bot?retryWrites=true&w=majority&appName=Agni"
};
