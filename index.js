// Required imports
import { Client, Intents } from "discord.js";
import CONFIG from "./config_variables";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// On Ready
client.once("ready", () => {
  console.log(`=== Logged In As: ${client.user.tag} ===`);
});

// On Error
client.on("error", (error) => {
  console.log(`=== ERROR ===`);
  console.log("===", error, "===");
});

client.login(CONFIG.DISCORD_TOKEN);