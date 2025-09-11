const fs = require("fs");
if (fs.existsSync("config.env")) require("dotenv").config({ path: "./config.env" });

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "your_session_id_here",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ue4ppc.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 AGNI Is Alive Now😍*",
  BOT_OWNER: process.env.BOT_OWNER || "94776907496",
  MONGODB: process.env.MONGODB || "mongodb://127.0.0.1:27017/agni_bot" // local or Atlas URI
};
