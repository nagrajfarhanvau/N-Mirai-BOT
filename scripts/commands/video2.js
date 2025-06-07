module.exports.config = {
  name: "video2",
  version: "0.0.3",
  permission: 0,
  prefix: 'awto',
  credits: "Nayan",
  description: "Random video",
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("-❇♦❇-「-𝐕𝐈𝐃𝐄𝐎- -❇♦❇-\n━━━━━━━━━━━━━\n𝟙. 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎 -🔰 \n𝟚. 𝐂𝐎𝐔𝐏𝐋𝐄 𝐕𝐈𝐃𝐄𝐎 -🔰\n𝟛. 𝐒𝐇𝐎𝐑𝐓 𝐕𝐈𝐃𝐄𝐎 -🔰\n𝟜. 𝐒𝐀𝐃 𝐕da𝐄𝐎 -🔰\n𝟝. 𝐒𝐓𝐀𝐓𝐔𝐒 𝐕𝐈𝐃𝐄𝐎 -🔰\n𝟞. 𝐒𝐇𝐀𝐈𝐑𝐈 -🔰\n𝟟. 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎 -🔰\n𝟠. 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 -🔰\n𝟡. 𝐇𝐔𝐌𝐀𝐈𝐘𝐔𝐍 𝐅𝐎𝐑𝐈𝐃 𝐒𝐈𝐑 -🔰\n𝟙𝟘. 𝐈𝐒𝐋𝐀𝐌𝐈𝐊 𝐕𝐈𝐃𝐄𝐎 -🔰\n\n-♦-♦-「 -𝟏𝟖+ 𝐕𝐈𝐃𝐄𝐎- 」-♦-♦-\n━━━━━━━━━━━━━\n𝟙𝟙. 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎 -♦\n𝟙𝟚. 𝐇𝐎𝐓 -♦\n𝟙𝟛. 𝐈𝐓𝐄𝐌 -♦\n\n -♦𝗧𝗲𝗹𝗹 𝗺𝗲 𝗵𝗼𝘄 𝗺𝗮𝗻𝘆 𝘃𝗶𝗱𝗲𝗼 𝘄𝗮𝗻𝘁 𝘆𝗼𝘂♦-  ", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}; 

module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = await linkanh(a.body);
  const axios = require("axios");
  if ("create" === t.type) {
    const response = await p.get(h);
    const data = response.data.data;
    const cap = response.data.nayan;
    const cn = response.data.count;
    let nayan = (await p.get(data, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `${cap}` + `\n\n¤《♦-𝗕Ø𝗦𝗦 𝗧𝗔𝗡𝗩𝗜𝗥-♦ : ${cn}》¤`,
      attachment: nayan
    }, a.threadID, a.messageID)
  }
};

async function linkanh(choice) {
  const axios = require("axios");
  const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json');
  const n = apis.data.api
  const options = {
    "1": "/video/love",
    "2": "/video/cpl",
    "3": "/video/shortvideo",
    "4": "/video/sadvideo",
    "5": "/video/status",
    "6": "/video/shairi",
    "7": "/video/baby",
    "8": "/video/anime",
    "9": "/video/humaiyun",
    "10": "/video/islam",
    "11": "/video/horny",
    "12": "/video/hot",
    "13": "/video/item"
  };
  const h = `${n}${options[choice]}`;
  return { p: axios, h };
}
