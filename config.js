const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "Put Session Id",
  // ADD Your Session Id 
  MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
    // ADD Your MongoDB Database URL
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263714757857",
  //========================================- OTHER - CONFIGS -=====================================================================
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakayo,huththo").split(','),
  ANTI_LINK: process.env.ANTILINK || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "true",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  packname: process.env.packname || "𝙼𝙰𝙻𝚅𝙸𝙽 𝙼𝙳",
  author: process.env.author || "ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀",
  //==========================================- API-CONFIGS -==========================================================
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "2d61a72574c11c4f36173b627f8cb177", //openweathermap.org
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "sk_6438bcc100d96458f8de0602aec662f4ba14b905fd090ad3", //elevenlabs.io
  SHODAN_API: process.env.SHODAN_API || "cbCkidr6qd7AFVaYs56MuCouGfM8gFki", //developer.shodan.io
  PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH", // pexels.com
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY || "23378594-7bd620160396da6e8d2ed4d53", // pixabay.com
  ZIPCODEBASE_API_KEY: process.env.ZIPCODEBASE_API_KEY || "0f94a5f0-6ea4-11ef-81da-579be4fb031c", // zipcodebase.com
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  START_MSG: process.env.START_MSG || `🚀 *_MALVIN-MD Connected Successfully!_* ✅ 

--- *👨‍💻🎉 _Welcome to MALVIN-MD!_* 🎉🥰 

*🙃 PREFIX:* .

*🙃 OWNER:* 263714757857


_Thank you for using_ *👨‍💻MALVIN MD🥰.*
_We're here to make your experience enjoyable and seamless._
_If you need any help or have questions, don't hesitate to ask._ 🌝🥰

*🖇️Join My WhatsApp Channel✓🤗 - :* https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

*🖇️Subscribe My Youtube Channel✓💗 - :* https://www.youtube.com/@malvintech2 

*🖇️Fork & Star My Repo✓💗 - :* https://github.com/kingmalvn/MALVIN-MD

*🖇️Follow My Github Account✓💗 - :* https://github.com/kingmalvn 

_*👨‍💻 Enjoy your time with us! 😊*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴛᴇᴄʜ*` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://g.top4top.io/p_3218pggm51.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/uxnee2.jpg",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
    MENU_MS: process.env.MENU_MS || `menu 2`,

};
