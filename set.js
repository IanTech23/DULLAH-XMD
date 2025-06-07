const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VU2W6jSBT9l3qN1WE3thSp2WyDgw2x8TaahwIKqJjNVYUxbvnfR8RJd0vd05Phqajl3nPOPfd+A2WFKZqjDoy/gZrgM2SoX7KuRmAM9CZJEAEDEEMGwRi0rhidNxETE3sVqTw9THyrPYnhQ6isXMVy0nBmL7sEunz7BG4DUDdhjqM/BLQ2lc9M/Mjzj2XgL47t4sFfdJEmz1u1M16lIFo+UPmlvm7cJ3DrI0JMcJladYYKRGA+R50HMfkc/OXy8TGhpyIw8MQLp5Fq6idutxxZO1VdX70ld5WnVitLx230OfjCghlnpcQytITKf2aXtpuVW+9w3KTOMKbexpw5Q+HBmWLuDp/itESxHaOSYdZ9WveTxW0Lj+BLFSrhVb52eolLy0g3FGn0wovZ42R6kuqos9TPAV+WI7dxGsQCFo1O3IkN1+RYTOzXdZUJ1eqsnemczIMsy48/A/fIh1eO/0d3fy5Uk6IjvGW5cLOB6e4xDaaeTk7iSXAdUekUPmqs8Dn3PwffxOaW212GliW762NwCU9ybUyJLto+nLRxm8zqE6mXHVdIP+BD1pA/ody+jIrsIanSOpLN1eqqSzV8SI6vgsKhHKe2Wom8djwFTYacBOX1NdPS8HAUlitT1c2D8irzZLZTMyft5iFWDKuDZ017emN0RJ0dgzF/GwCCUkwZgQxX5dserwwAjM8rFBHE3uQFy/3lsNrvRtct5xn7YEedDQ3PAsRqOgyb4d49FMZa3M0W3vEJDEBNqghRiuIZpqwinYsohSmiYPzXW6V60gQVFUMOjnvbytJQEIWhKgvKV/qlzSCjsK6/lIiBAUhIVbgIjBlp0ADcHwiKYk20iSTIsjwZchNZEWVV0FSVk2VupPcUi3vSNS4QZbCowZgfSiNhyImydPt7AEp0YXf/9KxFfgASTCgLyqbOKxh/mOvjEEZR1ZRs1ZWR0S8QAWPuxzZiDJcp7Zk1JSRRhs/I6HmAcQJzir4LjQiKP7i8Dw+jivv6T/ezvSFqFuix94F+0WYsqb/KU8L+NrBh+dVtMngFA5DfX0pDiedHwlBSZLF/2m/fvkPuM8SIQZxTMAaGfV2kpuo3Z2XZpvv9dKVpc03rq/lB8cOyd0u8+GbCCyNihstM5+zwWZkE9UWulNx1927cjuRiWrni4XVn/y4IGINm8uw2z5aJtr4Eu8OMECwb/CjNiXuwc9s7F2dlc7VWij1ZYlvQNl5ceJsh34y0aeJrkg67lYsfhoEfc65CeecyjfTe3wMQozOO0M/JKKZXd5U62aJV1zNdDc6dtXPT1Awm5nPbbGePNl1cPXETXTJGTHZ0isrfEdvSnBK9Tp153DQOmm5f6tZfR2veFhivvzfTWzPn70MUv9scv/0mGL3NpPci/Wcx78B7z3G3wU8x3qfcv0wKPQg0cRSfYStcKz82pt1DtplHCC7rtTk1Z5GHDtnJXAh7vgO33vx1DllSkaJXpgghGABSNb2D7TKp/pDJ0G1bS++0c0iZ9qMrftNo4uh+yyNVPYM0A2PAz6VsJvUW77S6XjHIPpoMaP2nz2pw+wdRo2RgBwgAAA==',
    PREFIXE: process.env.PREFIX || "!",
    OWNER_NAME: process.env.OWNER_NAME || "IAN TECH v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254723278526,254792918934",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'IAN TECH',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/t7b1ik.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
