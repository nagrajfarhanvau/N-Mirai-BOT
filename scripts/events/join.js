module.exports.config = {
  name: "join",
  eventType: ['log:subscribe'],
  version: "1.0.0",
  credits: "Mirai-Team", // FIXED BY YAN Nayan
  description: "GROUP UPDATE NOTIFICATION"
};

const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
//const { join } = require('path');
const axios = require('axios');
const jimp = require("jimp")
const fontlink = 'https://drive.google.com/u/0/uc?id=10XFWm9F6u2RKnuVIfwoEdlav2HhkAUIB&export=download'
let PRFX = `${global.config.PREFIX}`;

module.exports.circle = async (image) => {
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

let suffix;

module.exports.run = async function({ api, event, Users }) {
  var fullYear = global.client.getTime("fullYear");
  var getHours = await global.client.getTime("hours");
  var session = `${getHours < 3 ? "midnight" : getHours < 8 ? "Early morning" : getHours < 12 ? "noon" : getHours < 17 ? "afternoon" : getHours < 23 ? "evening" : "midnight"}`
  const moment = require("moment-timezone");
  var thu = moment.tz('Asia/dhaka').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  const time = moment.tz("Asia/dhaka").format("HH:mm:ss - DD/MM/YYYY");
  const hours = moment.tz("Asia/dhaka").format("HH");
  const { commands } = global.client;
  const { threadID } = event;
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  if (!event.logMessageData.addedParticipants || !Array.isArray(event.logMessageData.addedParticipants)) {
    return;
  }
  if (event.logMessageData.addedParticipants && Array.isArray(event.logMessageData.addedParticipants) && event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    //api.changeNickname(`𝗕𝗢𝗧 ${(!global.config.BOTNAME) ? "Buddy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());

    let gifUrl = 'https://i.imgur.com/mBKcO6C.gif';
let gifPath = __dirname + '/Nayan/join/join.gif';

axios.get(gifUrl, { responseType: 'arraybuffer' })
.then(response => {
    fs.writeFileSync(gifPath, response.data);
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ➠${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage("-•|•- 𝐈 𝐜𝐨𝐦𝐢𝐧𝐠 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐠𝐫Ø𝐮𝐩 𝐂𝐚𝐲𝐛𝐞𝐫 𝐂𝐚𝐭 😺 𝐰𝐢𝐭𝐡 𝐓𝐚𝐧𝐯𝐢𝐫 _//-👅💦!", event.threadID, () => api.sendMessage({ body: `${global.config.BOTNAME} -🫦𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗_//-😍«\n\n-𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂𝗮𝗹𝗮𝘆𝗸𝘂𝗺_//-😊☘
<------------------------------>  
-😵𝗕𝗢𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗙𝗨𝗟_//-😵 !!! 

-🫦𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 𝗔𝗟𝗟𝗢𝗪 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣_//-🫦!!!
<------------------------------>\n\n-🫦TO 𝗩𝗜𝗘𝗪 𝗔𝗡𝗬 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗨𝘀𝗲_//-👉${global.config.PREFIX}help\nSee command👉 ${global.config.PREFIX}command
\n\EXAMPLE:👇\n${global.config.PREFIX}admin (information)\n${global.config.PREFIX}islam (video)\n${global.config.PREFIX}tik (link)\n${global.config.PREFIX}fbvideo (link)
<------------------------------>
-🫦𝗔𝗡𝗗 𝗙𝗢𝗥 𝗔𝗡𝗬 𝗖𝗢𝗠𝗣𝗟𝗔𝗜𝗡𝗧𝗦 𝗢𝗥 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔𝗧𝗢𝗥_//-🫦 

-🫦𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 : 𝗧𝗮𝗻𝗩𝗶𝗿 𝗔𝗵𝗺𝗲𝗱_//-🫣

-🫦𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗟𝗶𝗻𝗸 :- 

𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝘄𝘄𝘄.T𝘅𝗻𝘅𝘅.𝗰𝗼𝗺61550669852479_//-🥵

-🫦𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗡𝘂𝗺𝗯𝗲𝗿 :- 𝘄𝗮.𝗺𝗲/+8801323850908_//-😉

-🫦𝗘𝗺𝗮𝗶𝗹 :-𝘁𝗮𝗻𝘃𝗶𝗿𝘅𝘅𝘅𝘅𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺_//-🥵`, attachment: fs.createReadStream(gifPath)}, threadID));
  }})
.catch(error => {
    console.error(error);
});
  }
  else {
    try {
      if (!fs.existsSync(__dirname + `/Nayan/font/Semi.ttf`)) {
        let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/Nayan/font/Semi.ttf`, Buffer.from(getfont, "utf-8"));
      };
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for (let o = 0; o < event.logMessageData.addedParticipants.length; o++) {
        let pathImg = __dirname + `/Nayan/join/${o}.png`;
        let pathAva = __dirname + `/Nayan/join/avt.png`;
        let avtAnime = (await axios.get(encodeURI(
          `https://graph.facebook.com/${event.logMessageData.addedParticipants[o].userFbId}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`), { responseType: "arraybuffer" })).data;
        var ok = [
          'https://i.imgur.com/cJUpNpa.jpeg',
          'https://i.imgur.com/nusJ4PS.jpeg',
          'https://i.imgur.com/l0TrR0h.jpeg',
          'https://i.imgur.com/N0kBFHh.jpeg',
          'https://i.imgur.com/LmOhcg0.jpeg'
        ]
        let background = (await axios.get(encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`), { responseType: "arraybuffer", })).data;
        fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
        fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
        var avatar = await this.circle(pathAva);
        let baseImage = await loadImage(pathImg);
        let baseAva = await loadImage(avatar);
        registerFont(__dirname + `/Nayan/font/Semi.ttf`, {
          family: "Semi"
        });
        let canvas = createCanvas(1902, 1082);
        console.log(canvas.width, canvas.height)
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
        ctx.fillStyle = "#FFF";
        ctx.textAlign = "center";
        ctx.font = `155px Semi`;
        ctx.fillText(`${event.logMessageData.addedParticipants[o].fullName}`, canvas.width / 2 + 20, canvas.height / 2 + 100);
        ctx.save();
        ctx.font = `75px Semi`;
        ctx.fillText(`Welcome to ${threadName}`, canvas.width / 2 - 15, canvas.height / 2 + 235)
        const number = participantIDs.length - o;

        if (number === 11 || number === 12 || number === 13) {
          suffix = "th";
        } else {
          const lastDigit = number % 10;
          switch (lastDigit) {
            case 1:
              suffix = "st";
              break;
            case 2:
              suffix = "nd";
              break;
            case 3:
              suffix = "rd";
              break;
            default:
              suffix = "th";
              break;
          }
        }

        ctx.fillText(`You are the ${number}${suffix} member of this group`, canvas.width / 2 - 15, canvas.height / 2 + 350);
        ctx.restore();
        const imageBuffer = canvas.toBuffer();
        fs.writeFileSync(pathImg, imageBuffer);
        abx.push(fs.createReadStream(__dirname + `/Nayan/join/${o}.png`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = ` -😍𝗛𝗲𝗹𝗹𝗼 {name}\n𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼-😍 {threadName}\n-🤍𝘆𝗼𝘂'𝗿𝗲 𝘁𝗵𝗲 {soThanhVien}th 𝗺𝗲𝗺𝗯𝗲𝗿 𝗼𝗻 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗽𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝗷𝗼𝘆_//-😊😍"\n─────────────────\n[ {time} - {thu} ]` : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'You' : 'You')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
        .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time)
        .replace(/\{thu}/g, thu);

      var formPush = { body: msg, attachment: abx, mentions }
      api.sendMessage(formPush, threadID);
      for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/Nayan/join/${ii}.png`)
      }
    } catch (e) { return console.log(e) };
  }
}
