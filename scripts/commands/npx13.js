
const fs = require("fs");
module.exports = {
  config:{
  name: "npx13",
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
  const NAYAN = ['https://i.imgur.com/qUGW4of.mp4','https://i.imgur.com/lRXz2wO.mp4','https://i.imgur.com/uT4WuSx.mp4','https://i.imgur.com/5FNMmei.mp4','https://i.imgur.com/agYzs0h.mp4','https://i.imgur.com/kHhsWWY.mp4','https://i.imgur.com/H1pXwQ6.mp4','https://i.imgur.com/wh3uSuM.mp4','https://i.imgur.com/nZRY8u8.mp4','https://i.imgur.com/ztxR3rI.mp4','https://i.imgur.com/9Qz16tV.mp4','https://i.imgur.com/VMobsvB.mp4','https://i.imgur.com/3cGnOAM.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🤣")==0 || body.indexOf("😆")==0 || body.indexOf("😂")==0 || body.indexOf("😁")==0 || body.indexOf("😄")==0 || body.indexOf("😃")==0 || body.indexOf("😀")==0 || body.indexOf("😹")==0 || body.indexOf("😸")==0 || body.indexOf("😺")==0) {
    var msg = {
        body: "●❯────────────────❮●\n         -♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁𝐎𝐓♦-         \n●❯────────────────❮●\n ┉❈⋆⃝🌺বা্ঁলে্ঁর্ঁ এ্ঁড্ঁমি্ঁন্ঁ ব্ঁউ্ঁ দে্ঁয়্ঁ না্ঁ🥺 ❈⋆⃝🌺_//-😥\n●❯────────────────❮●  ",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙆🏻‍♂️", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
