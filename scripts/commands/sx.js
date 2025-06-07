module.exports.config = {
  name: "sex",
  version: "1.0.0",
  permssion: 0,
  premium: false,
  credits: "ALVI",
  description: "sexy VEDIO",
  prefix: true,
  category: "Hình ảnh",
  usages: "sexy vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝐀𝐈 𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐓𝐎𝐌𝐀𝐑 𝐒𝐄𝐗𝐘 𝐕𝐈𝐃𝐄𝐎 🥵🌺"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/kLpLMTm.mp4",
"https://i.imgur.com/kLpLMTm.mp4"
  
  ];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
