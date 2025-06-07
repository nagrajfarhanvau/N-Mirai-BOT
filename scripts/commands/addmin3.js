module.exports.config = {
    name: "addmin3",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       :- 𝗡𝗮𝗱𝗶𝗺 𝗔𝗵𝗺𝗲𝗱 (𝗡𝗮𝗱𝘂)
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 :-〲TOM 卝 চৌধুরীヅ࿐
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   :- 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬:- 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵,𝐃𝐡𝐚𝐤𝐚,𝗞𝗵𝗶𝗹 𝗸𝗵𝗲𝘁
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬:- 𝐃𝐡𝐚𝐤𝐚,𝗸𝗵𝗶𝗹 𝗸𝗵𝗲𝘁
𝐆𝐞𝐧𝐝𝐞𝐫.   :- 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           :- 16+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 :- 𝐒𝐢𝐧𝐠𝐥𝐞(🫣)
𝐖𝐨𝐫𝐤        :- 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       :- 𝗲𝘄𝗿𝗽𝗶𝘅𝘅𝗶@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺 
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩:- wa.me/+8801328955648
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  :- t.me/𝗽𝗶𝗶𝘅𝘅𝗶𝘁𝗮𝗵
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :-https://www.facebook.com/pixxi0`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61566560938302/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
