module.exports = {
  config: {
    name: "out",
  version: "1.0.5",
  credits: "nayan",
  prefix: false,
  permission: 2,
  description: "out bot",
  category: "admin",
  cooldowns: 5
},

start: async function({ nayan, events, args }) {
        if (!args[0]) return nayan.removeUserFromGroup(nayan.getCurrentUserID(), events.threadID);
  nayan.reply("🚫-𝐉𝐢𝐚𝐠𝐚 𝐒𝐨𝐛𝐚𝐢 𝐕𝐚𝐥𝐚 𝐭𝐡𝐚𝐤-🫡", events.threadID)
        if (!isNaN(args[0])) return nayan.removeUserFromGroup(nayan.getCurrentUserID(), args.join(" "));
}
}
