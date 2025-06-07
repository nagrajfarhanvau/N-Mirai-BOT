const fs = require("fs");
module.exports = {
  config:{
  name: "npx4",
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
  const NAYAN = ["https://i.imgur.com/64RETlb.mp4","https://i.imgur.com/wbpQrKu.mp4","https://i.imgur.com/DL7kpJc.mp4","https://i.imgur.com/FNxOc4F.mp4","https://i.imgur.com/nJo4WH1.mp4","https://i.imgur.com/3oh3Yiq.mp4","https://i.imgur.com/G2UfW7m.mp4",'https://i.imgur.com/SNhYQi2.mp4','https://i.imgur.com/wkz6F6D.mp4','https://i.imgur.com/oLTkb9h.mp4','https://i.imgur.com/WLs3gp6.mp4','https://i.imgur.com/CPFD7Gm.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🖤")==0 || body.indexOf("🤍")==0 || body.indexOf("❤️")==0 || body.indexOf("💛")==0 || body.indexOf("💚")==0 || body.indexOf("🩵")==0 || body.indexOf("💙")==0 || body.indexOf("💖")==0 || body.indexOf("💘")==0 || body.indexOf("💝")==0) {
    var msg = {
        body: "●❯────────────────❮●\n         -♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁𝐎𝐓♦-         \n●❯────────────────❮●\n🔰___|•সঠিক মানুষের চোখে তুমি সব সময় সুন্দর!_//-🤍🌸\n●❯────────────────❮●",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
