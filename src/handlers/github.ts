import { Message } from "discord.js";

import {
  handleGithubVerify,
  handleGithubCheck,
} from "../lib/github-verification";
import { parseGithubVerification, parseGithubCheck } from "../parser/github";
import User from "../models/user";
import { log } from "../utils";
import { commandPrefix } from "../constants";

export async function verifyGithub(message: Message): Promise<void> {
  try {
    const foundUser = await User.findOne({ discordId: message.author.id });

    if (!foundUser)
      throw `You first need to save your wallet address with the \`${commandPrefix} save-wallet <wallet-address>\` command.`;

    const [username] = parseGithubVerification(
      message.content,
      message.author.id
    );

    if (username) {
      const response = await handleGithubVerify(message.author.id, username);
      message.author.send({ embeds: [response.message] });
    }
  } catch (err) {
    if (typeof err === "string") message.reply(err);
    else {
      log(err);
      message.reply(
        `Command parsing failed. Please use the ${commandPrefix} info command to see how to use the requested command properly.`
      );
    }
  }
}

export async function checkGithub(message: Message): Promise<void> {
  try {
    const foundUser = await User.findOne({ discordId: message.author.id });

    if (!foundUser)
      throw `You first need to save your wallet address with the \`${commandPrefix} save-wallet <wallet-address>\` command.`;

    const [verification_code, username] = parseGithubCheck(
      message.content,
      message.author.id
    );

    if (verification_code && username) {
      const response = await handleGithubCheck(
        message.author.id,
        verification_code,
        username
      );

      message.author.send({ embeds: [response.message] });

      if (response.ok) {
        await User.updateOne(
          { discordId: message.author.id },
          { github: response.username, modifiedAt: Date.now() }
        );

        message.author.send("GitHub user succesfully saved.");
      }
    }
  } catch (err) {
    if (typeof err === "string") message.reply(err);
    else {
      log(err);
      message.reply(
        `Command parsing failed. Please use the ${commandPrefix} info command to see how to use the requested command properly.`
      );
    }
  }
}
