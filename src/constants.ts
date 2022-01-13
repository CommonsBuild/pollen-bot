import { config } from "dotenv";

config();

export const commandPrefix = process.env.COMMAND_PREFIX || "!cred";
export const wikiLink = process.env.WIKI_LINK || "https://sourcecred.io/docs";
export const logoLink = process.env.BOT_LOGO_LINK || "https://avatars.githubusercontent.com/u/35711667";
export const repoLink = process.env.REPO || "https://github.com/commonsBuild/tec-sourcred";
export const ledgerFileURI = process.env.LEDGER_FILE_LINK || "https://raw.githubusercontent.com/CommonsBuild/tec-sourcecred/master/data/ledger.json";
export const instanceLink = process.env.INSTANCE_LINK || "";
export const embedColor = process.env.EMBED_COLOR || 0x8B708D;
