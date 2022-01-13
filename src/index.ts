/* eslint-disable quotes */
import { Client, TextChannel } from "discord.js";
import { config } from "dotenv";
import { CronJob } from "cron";

import detectHandler from "./parser/detectHandler";
import { RequestHandlerError } from "./error-utils";
import { log } from "./utils";
import updateroles from "./handlers/updateRoles";

import { commandPrefix } from "./constants";

require("./db/connection");

// Load this as early as possible, to init all the environment variables that may be needed
config();
// Sentry.init({ dsn: environment('SENTRY_DSN') })

const client = new Client({
  partials: ["MESSAGE", "REACTION"],
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MEMBERS",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
  ],
});

client.on("ready", () => {
  log(`Bot successfully started as ${client.user.tag} 🐝`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  try {
    const handler = detectHandler(message.content);
    if (handler) {
      handler(message);
      log(
        `Served command ${message.content} successfully for ${message.author.username}.`
      );
    }
  } catch (err) {
    if (err instanceof RequestHandlerError) {
      log(`${err}`);
      message.reply(
        `Could not find the requested command. Please use ${commandPrefix} help for more info.`
      );
    }
    // Sentry.captureException(err)
  }
});

// Runs the pollen updateRoles function periodically at 12am and 12pm UTC
// eslint-disable-next-line
const halfDayRoleUpdate = new CronJob(
  // start: true
  "0 0,12 * * *",
  () => updateroles(null, client),
  null,
  true,
  "Europe/London",
  null
);

client.login(process.env.DISCORD_API_TOKEN);
