/* eslint-disable quotes */
import { MessageEmbed } from "discord.js";
import { commandPrefix } from "./constants";

export function walletWarningEmbed(): MessageEmbed {
  return new MessageEmbed({
    title: "Warning 🚨",
    description: `You are using the \`${commandPrefix} save-wallet\` command incorrectly!`,
    color: 0x0F2EEE,
    fields: [
      {
        name: `\`${commandPrefix} save-wallet walletAddress\``,
        value:
          "Correct usage of this command requires you to add your xDai wallet address.",
      },
    ],
    image: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function infoEmbed(): MessageEmbed {
  return new MessageEmbed({
    color: 0x0F2EEE,
    author: {
      name: "{TBD} sourcecred bot",
      url: "https://github.com/CommonsBuild/pollen-bot/",
    },
    description:
      "{TBD}",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    fields: [
      {
        name: "Signing up",
        value:
          "To sign up for sourcecred, you need to send your information to the DB using some of the following commands.",
      },
      {
        name: "Save wallet address - required",
        value: `Send \`${commandPrefix} save-wallet walletAddress\` to add your wallet address to the DB as well as your Discord ID and Discord tag.`,
      },
      {
        name: "Save Discourse (Forum) account - optional",
        value: `Send \`${commandPrefix} verify-discourse discourseUsername\` and follow the process to verify and add your Discourse account (if you have one) to the DB.`,
      },
      {
        name: "Save GitHub account - optional",
        value: `Send \`${commandPrefix} verify-github githubUsername\` and follow the process to verify and add your GitHub account (if you have one) to the DB.`,
      },
      {
        name: "Update Discord account",
        value: `Send \`${commandPrefix} update-discord\` in case you want to update your Discord tag in the DB`,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function helpEmbed(): MessageEmbed {
  return new MessageEmbed({
    color: 0x0F2EEE,
    author: {
      name: "{TBD} Sourcecred Bot",
      url: "https://github.com/CommonsBuild/pollen-bot/",
    },
    description: `Hi, my name's {TBD}, I handle some sourcecred related actions. All my commands are prefixed by \`${commandPrefix}\`. Refer to the list below for a list of my commands!`,
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    fields: [
      {
        name: `${commandPrefix} help`,
        value: "Lists all commands.",
      },
      {
        name: `${commandPrefix} info`,
        value: "Displays information of what Sourcecred is and how to get started.",
      },
      {
        name: `${commandPrefix} mycred`,
        value:
          "Shows your total cred, cred earned last week and cred earned this week.",
      },
      {
        name: `${commandPrefix} userinfo`,
        value: "Shows your sourcecred user info saved in the database.",
      },
      {
        name: `${commandPrefix} save-wallet YourWalletAddress`,
        value:
          "Saves your wallet address, Discord ID and Discord tag in the database (address will be used for cred payouts).",
      },
      {
        name: `${commandPrefix} verify-discourse YourDiscourseUsername`,
        value:
          "Begins the process of verifying and saving your Discourse username in the database.",
      },
      {
        name: `${commandPrefix} verify-github YourGithubUsername`,
        value:
          "Begins the process of verifying and saving your GitHub username in the database.",
      },
      {
        name: `${commandPrefix} update-discord`,
        value: "Updates your Discord ID and tag in the database.",
      },
    ],
    image: {
      url: "https://i.imgur.com/E7x8s0j.png",
    },
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function adminHelpEmbed(): MessageEmbed {
  return new MessageEmbed({
    color: 0x0F2EEE,
    author: {
      name: "{TBD} Sourcecred bot",
      url: "https://github.com/CommonsBuild/pollen-bot",
    },
    description: "Refer to the list below for a list of admin commands",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    fields: [
      {
        name: `${commandPrefix} updateroles`,
        value: "Updates cred minting roles.",
      },
      {
        name: `${commandPrefix} getlastmodified [weeks]`,
        value:
          "Gets the list of users modified in the DB for the past [weeks].",
      },
      {
        name: `${commandPrefix} getaddresslist`,
        value:
          "Gets the list of user addresses from the DB to be used for the Aragon labels.",
      },
      {
        name: `${commandPrefix} getbanned`,
        value: "Gets the list of sourcecred banned users.",
      },
      {
        name: `${commandPrefix} ban [user ID or IDs separated by spaces (' ')]`,
        value: "Bans the specified users from cred.",
      },
      {
        name: `${commandPrefix} uban [user ID or IDs separated by spaces (' ')]`,
        value: "Unbans the specified users from cred.",
      },
    ],
    image: {
      url: "https://i.imgur.com/E7x8s0j.png",
    },
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function verifyDiscourseEmbed(
  verificationCode: string,
  discourseUsername: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Verify discourse account",
    description:
      "Process to verify your account to opt-in for cred distributions.",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    color: 0x0F2EEE,
    fields: [
      {
        name: "1. Change your discourse name",
        value: `Go to your [account preferences](https://forum.tecommons.org/u/${discourseUsername}/preferences/account) and after that,
        change your 'Name' field temporarily into this: \`${verificationCode}\`.`,
      },
      {
        name: "2. Complete the verification",
        value: `Confirm the previous step using the following command:
        \`${commandPrefix} check-discourse ${verificationCode} ${discourseUsername}\``,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function successDiscourseVerificationEmbed(
  discourseUsername: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Congratulations!",
    description: "The verification process was completed successfully",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    color: 0x0F2EEE,
    fields: [
      {
        name: "All set!",
        value: `Thanks for verifying your discourse account for cred distributions, ${discourseUsername}!`,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function errorDiscourseVerificationEmbed(
  errorMessage: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Bad news!",
    description: "There was an error in the discourse verification process.",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    color: 0x0F2EEE,
    fields: [
      {
        name: "This is what happened",
        value: `${errorMessage}`,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function verifyGithubEmbed(
  verificationCode: string,
  githubUsername: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Verify github account",
    description:
      "Process to verify your account to opt-in for cred distributions.",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    color: 0x0F2EEE,
    fields: [
      {
        name: "1. Create a public gist",
        value:
          "Create a [public gist](https://gist.github.com/) called `pollen.md`",
      },
      {
        name: `2. Set code \`${verificationCode}\``,
        value: "Place the code in the body of the gist",
      },
      {
        name: "3. Complete the verification",
        value: `Confirm the previous step using the following command:
        \`${commandPrefix} check-github ${verificationCode} ${githubUsername}\``,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function successGithubVerificationEmbed(
  githubUsername: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Congratulations!",
    description: "The verification process was completed successfully",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    color: 0x0F2EEE,
    fields: [
      {
        name: "All set!",
        value: `Thanks for verifying your github account for cred distributions, ${githubUsername}!`,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function errorGithubVerificationEmbed(
  errorMessage: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Bad news!",
    description: "There was an error in the github verification process.",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    color: 0x0F2EEE,
    fields: [
      {
        name: "This is what happened",
        value: `${errorMessage}`,
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "https://token-engineering-commons.gitbook.io/tec-source/",
    },
  });
}

export function credEmbed(
  totalCred: number,
  lastWeekCred: number,
  thisWeekCred: number
): MessageEmbed {
  return new MessageEmbed({
    color: 0x0F2EEE,
    title: "Your cred:",
    thumbnail: {
      url: "https://images-ext-1.discordapp.net/external/9wjKKfnz90VR4MCxCu_KYVee6HDO8smJduqtL8dbNCs/%3Fsize%3D128/https/cdn.discordapp.com/icons/776352494992883722/0000b679a3e5f283653a38e138a43f9b.webp",
    },
    fields: [
      {
        name: "Total",
        value: Math.round(totalCred).toString(),
      },
      {
        name: "Last week",
        value: Math.round(lastWeekCred).toString(),
      },
      {
        name: "This week",
        value: Math.round(thisWeekCred).toString(),
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "https://commonsbuild.github.io/tec-sourcecred/",
    },
  });
}
