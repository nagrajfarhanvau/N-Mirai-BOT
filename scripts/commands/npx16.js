const fs = require("fs");
module.exports = {
  config:{
  name: "npx16",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/USqnjFS.mp4','https://i.imgur.com/GqMgThm.mp4','https://i.imgur.com/iP6Qlqm.mp4','https://i.imgur.com/u1FNb13.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🎧")==0 || body.indexOf("🎸")==0 || body.indexOf("Arabic")==0 || body.indexOf("rimix")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
    var msg = {
        body: "●❯────────────────❮●\n         -♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁𝐎𝐓♦-         \n●❯────────────────❮●\n🔰____𝐑𝐄𝐌𝐈𝐗____🔰\n●❯────────────────❮● ",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
