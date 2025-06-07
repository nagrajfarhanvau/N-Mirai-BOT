const fs = require("fs");
module.exports = {
	config:{
	name: "npx5",
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
	const NAYAN = ["https://i.imgur.com/OWDV3Gj.mp4","https://i.imgur.com/f4ghIq0.mp4",'https://i.imgur.com/R96vFis.mp4','https://i.imgur.com/XELPozV.mp4','https://i.imgur.com/AZtfdwd.mp4','https://i.imgur.com/uQguKEX.mp4']
		var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("🌺")==0 || body.indexOf("🥀")==0 || body.indexOf("🌹")==0 || body.indexOf("🌼")==0 || body.indexOf("🌷")==0 || body.indexOf("💐")==0 || body.indexOf("🌻")==0 || body.indexOf("🌼")==0 || body.indexOf("🪻")==0 || body.indexOf("💮")==0) {
		var msg = {
				body: "●❯────────────────❮●\n         -♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁𝐎𝐓♦-         \n●❯────────────────❮●\n🔰___-•|•কাউকে দূরে সরিয়ে দিতে চাইলে সামান্য অবহেলায় যথেষ্ট_//-🌺😊\n●❯────────────────❮●",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
	}
}
