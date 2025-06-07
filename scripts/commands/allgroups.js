module.exports.config = {
  name: "allgroups",
  version: "2.0.0",
  permission: 2,
  credits: "Nayan",
  description: "all groups",
  prefix: true,
  category: "admin",
  usages: "groups",
  cooldowns: 5,
};


module.exports.handleReply = async function({ api, event, args, Threads, handleReply }) {

  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  var arg = event.body.split(" ");
  var idgr = handleReply.groupid[arg[1] - 1];


  switch (handleReply.type) {

    case "reply":
      {
        if (arg[0] == "ban" || arg[0] == "Ban") {
          const data = (await Threads.getData(idgr)).data || {};
          data.banned = 1;
          await Threads.setData(idgr, { data });
          global.data.threadBanned.set(parseInt(idgr), 1);
          api.sendMessage(`●❯────────────────❮●\n       -♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦-       \n●❯────────────────❮●\n♦️__𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐛𝐚𝐧𝐧𝐞𝐝 𝐠𝐫𝐨𝐮𝐩 𝐢𝐝__♦️\n●❯────────────────❮● : ${idgr}`, event.threadID, event.messageID);
          break;
        }

        if (arg[0] == "out" || arg[0] == "Out") {
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr);
          api.sendMessage("●❯────────────────❮●\n       -♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦-       \n●❯────────────────❮●\n♦️__𝐨𝐮𝐭 𝐭𝐡𝐫𝐞𝐚𝐝 𝐰𝐢𝐭𝐡 𝐢𝐝__♦️\n●❯────────────────❮● : " + idgr + "\n" + (await Threads.getData(idgr)).name, event.threadID, event.messageID);
          break;
        }

      }
  }
};


module.exports.run = async function({ api, event, client }) {
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

  var listthread = [];

  //////////


  for (var groupInfo of list) {
    let data = (await api.getThreadInfo(groupInfo.threadID));

    listthread.push({
      id: groupInfo.threadID,
      name: groupInfo.name,
      sotv: data.userInfo.length,
    });

  } //for

  var listbox = listthread.sort((a, b) => {
    if (a.sotv > b.sotv) return -1;
    if (a.sotv < b.sotv) return 1;
  });

  let msg = '',
    i = 1;
  var groupid = [];
  for (var group of listbox) {
    msg += `●❯────────────────❮●\n       -♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦-       \n●❯────────────────❮●\n${i++}. ${group.name}\ngroup id : ${group.id}\nmembers : ${group.sotv}\n\n`;
    groupid.push(group.id);
  }

  api.sendMessage(msg + '●❯────────────────❮●\n       -♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦-       \n●❯────────────────❮●\n🚫__𝐫𝐞𝐩𝐥𝐲 "𝐨𝐮𝐭" 𝐨𝐫 "𝐛𝐚𝐧" 𝐭𝐡𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐨𝐫𝐝𝐞𝐫 𝐭𝐨 𝐨𝐮𝐭 𝐨𝐫 𝐛𝐚𝐧 𝐭𝐡𝐚𝐭 𝐭𝐡𝐫𝐞𝐚𝐝__🚫\n●❯────────────────❮●', event.threadID, (e, data) =>
    global.client.handleReply.push({
      name: this.config.name,
      author: event.senderID,
      messageID: data.messageID,
      groupid,
      type: 'reply'
    })
  );
};
