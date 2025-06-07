module.exports = {
  config: {
  name: "ai",
  version: "1.0.0",
  permission: 0,
  credits: "ArYan",
  description: "",
  prefix: 'awto', 
  category: "user", 
  usages: "query",
  cooldowns: 5,
  dependencies: {
    "nayan-server": ''
  }
  },

  start: async function({ nayan, events, args, Users, NAYAN }) {

    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const uid = events.senderID;
  var nn = await Users.getNameUser(uid);
  let np = args.join(" ");
  const { gpt } = require("nayan-server");

gpt({
    messages: [
        {
            role: "assistant",
            content: "-𝗛𝗲𝗹𝗹𝗼! 𝗛𝗼𝘄 𝗮𝗿𝗲 𝘆𝗼𝘂 𝘁𝗼𝗱𝗮𝘆-?😵"
        },
        {
            role: "user",
            content: `-𝗛𝗲𝗹𝗹𝗼, 𝗺𝘆 𝗻𝗮𝗺𝗲 𝗶𝘀_//-♦ ${nn}.`
        },
        {
            role: "assitant",
            content: `-𝗛𝗲𝗹𝗹𝗼, ${nn}! 𝗛𝗼𝘄 𝗮𝗿𝗲 𝘆𝗼𝘂 𝘁𝗼𝗱𝗮𝘆-?`
        }
    ],
    prompt: `${np}`,
    model: "GPT-4",
    markdown: false
}, (err, data) => {
    console.log(data)
  const answer = data.gpt
    var msg = [];
    {
        msg += `  ●❯────────────────❮●\n         -♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁𝐎𝐓♦-         \n●❯────────────────❮●\n❇━━━━━━♦━━━━━❇\n ${answer}\n❇━━━━━━♦━━━━━❇`
    }
     NAYAN.react("🔰")
    return NAYAN.reply(msg)
  });

  }
};
