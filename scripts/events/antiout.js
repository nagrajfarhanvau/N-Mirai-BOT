module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Nayan",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator na pasikat";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`🔰___𝗲𝗶 𝗯𝗼𝗹𝗼𝗱 𝗮 𝗮𝗺𝗿 𝗹𝗼𝗴𝗲 𝗽𝗮𝗿𝗲 𝗻𝗮𝗶 𝘁𝗮𝗶 𝗮𝗺𝗿 𝗮 𝗯𝗹𝗼𝗰𝗸 𝗱𝗶𝘀𝗲 𝗿𝗲 ${name} 𝘁𝗮𝗶 𝘁𝗼𝗿𝗲 𝗿 𝗮𝗱𝗱 𝗸𝗼𝗿𝘁𝗲 𝗽𝗮𝗿𝗹𝗮𝗺 𝗻𝗮___😏 :( `, event.threadID)
   } else api.sendMessage(` ___♦𝘅𝘂𝗻𝗮 𝗮𝗺𝗶 𝘁𝗵𝗮𝗸𝘁𝗲 𝘁𝗺𝗶 𝗯𝗲𝗿 𝗵𝗼𝗶𝘁𝗲 𝗽𝗮𝗿𝗯𝗮 𝗻𝗮 𝘁𝗼___😩, ${name} _🥹_ :(  `, event.threadID);
  })
 }
}
