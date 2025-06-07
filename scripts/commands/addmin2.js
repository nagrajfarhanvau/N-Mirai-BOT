module.exports.config = {
  name: "addmin2",
  version: "1.0.1", 
  permssion: 0,
  credits: "Ialamick Cyber Chat",
  prefix:true,
  description: "Admin and Bot info.",
  category: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/jfVTL4T.jpeg", 

            "https://i.imgur.com/jfVTL4T.jpeg", 

            "https://i.imgur.com/jfVTL4T.jpeg",

            "https://i.imgur.com/jfVTL4T.jpeg"];

var callback = () => api.sendMessage({body:`•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
 •┄┅════❁🌺❁════┅┄•

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 :  𝐂𝐲𝐛𝐞𝐫 𝐭𝐚𝐧𝐕î𝐫

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 1 𝐀d𝐦𝐢𝐧 𝐜𝐨𝐧𝐭𝐫𝐨𝐥 𝐓𝐡𝐢𝐬 𝐑𝐨𝐛𝐨𝐭

•┄┅══❁CONCATET❁══┅┄• 

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐏𝐚𝐠𝐞 : https://www.facebook.com/profile.php?id=61550669852479

𝐖𝐏 : wa.me/+880 1323850908
𝐖𝐏 : wa.me/+880 1956454280
𝐖𝐏 : wa.me/+880 19×××-×××3
𝐖𝐏 : wa.me/+880 17×××-××××2
𝐖𝐏 : wa.me/+880 18×××-××××8
𝐖𝐏 : wa.me/+880 15×××-××××9
𝐖𝐏 : wa.me/+880 18××-×××××7

•┄┅═══❁🌺❁═══┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═══❁🌺❁═══┅┄•

TYPE /help

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME}

𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX}

•—»✨ 𝐔𝐩𝐭𝐢𝐦𝐞

𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : ${juswa} 

𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  ༄🌺\n｢🕋｣${global.config.BOTNAME}｢🕋｣`,attachment: fs.createReadStream(__dirname + "/cache/cyber.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/cyber.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/cyber.jpg")).on("close",() => callback());
   };
