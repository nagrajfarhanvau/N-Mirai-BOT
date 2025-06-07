module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	permssion: 0,
  premium: false,
  prefix: true,
	credits: "ALVI",
	description: "Admin info",
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
var link =["https://i.postimg.cc/502V7BFq/Messenger-creation-191-C6998-AB3-D-4-FB2-B26-F-A6-DFCEFF386-D.jpg", 
            
            "https://i.postimg.cc/502V7BFq/Messenger-creation-191-C6998-AB3-D-4-FB2-B26-F-A6-DFCEFF386-D.jpg", 
            
"https://i.postimg.cc/502V7BFq/Messenger-creation-191-C6998-AB3-D-4-FB2-B26-F-A6-DFCEFF386-D.jpg",
            
            "https://i.postimg.cc/502V7BFq/Messenger-creation-191-C6998-AB3-D-4-FB2-B26-F-A6-DFCEFF386-D.jpg"];
  
var callback = () => api.sendMessage({body:`🌻-𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥-🌻\n
------------------------------------------------\n🌺-𝗡𝗮𝗺𝗲-🌺       : 𝗧𝗮𝗻𝘃𝗶𝗿 𝗔𝗵𝗺𝗲𝗱 (𝗗𝗶𝗽𝘁𝗼)_//-🫦\n🍁-𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸-🍁 :𝗧𝗮𝗻𝘃𝗶𝗿 𝗔𝗵𝗺𝗲𝗱_//-🫦\n💚-𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻-💚    : (𝗜𝘀𝗹𝗮𝗺)\n🌸-𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀-🌸 : (𝗗𝗵𝗮𝗸𝗮)\n🌿-𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀-🌿 :(𝗗𝗵𝗮𝗸𝗮,𝗗𝗵𝗮𝗺𝗿𝗮𝗶)\n🔥-𝗚𝗲𝗻𝗱𝗲𝗿-🔥     : (𝗠𝗮𝗹𝗲)\n♻️-𝗔𝗴𝗲-♻️            : 18+\n🔰-𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽-🔰 : (𝗦𝗜𝗡𝗚𝗘𝗟_//-😜)\n✴️-𝗪𝗼𝗿𝗸-✴️         : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁_//-🫣\n📩-𝗚𝗺𝗮𝗶𝗹-📩        : 𝘁𝗮𝗻𝘃𝗶𝗿𝘅𝘅𝘅𝘅@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺\n❇️-𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽-❇️ :  wa.me/+8801323850908\n♀️-𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺-♀️  : t.me/𝗧𝗮𝗻𝘃𝗶𝗿 𝗔𝗵𝗺𝗲𝗱_//-🥱\n-🌼𝗙𝗯 𝗹𝗶𝗻𝗸-🌼   :𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗽𝗿𝗼𝗳𝗶𝗹𝗲.𝗽𝗵𝗽?𝗶𝗱=61550669852479&mibextid=𝗸𝗙𝘅𝘅𝗝𝗗 `,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
