const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};
 

// Other
global.apikey = 'bf2d2cf29b3edc604b447983';
global.ownername = '`🧞‍♂️ ⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺';
global.owner = ['254113419479','254718382875'];
global.premium = ['254113419479','254718382875'];
global.packname = '`🧞‍♂️ ⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺ 𝚋𝚢';
global.author = 'MANOS 𝙈𝘿';
global.caption = ' 🦊MANOS🦊 ＭＤ V3 🍫';
global.sessionName = 'VAJIRA-MD=uUUVnDTB#9ixrnj13sAaGTmoZejDwAVhXz-BIT4anZHOQKXWlpEg';
global.prefa = ['!', '.'];
global.sp = '✪';
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`I am not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
};
global.link = 'https://youtube.com/@gamingeyingyt8216?si=IHmBhi2R69ao6jcG'
global.linkGroup = 'https://chat.whatsapp.com/JNAASTo0fMo3N4luk8arve'  
global.logo = process.env.LOGO || "https://telegra.ph/file/40ec3b1c34fef16e50d21.jpg",        
global.ANTI_BOT = process.env.ANTI_BOT || "false",        
global.typemenu = 'v1' // 'v1' => 'v5'
global.onlygroup = false // onlygroup
global.onlypc = false
global.AUTO_ABOUT = false
global.limitawal = {
    premium: 'Infinity',
    free: 10
};

// Add anticall option
global.config = {
    options: {
        antiCall: true, // Set to true for anticall functionality, false otherwise
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}
