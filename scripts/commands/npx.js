const fs = require("fs");
module.exports = {
	config:{
	name: "npx",
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
	const NAYAN = ['https://i.imgur.com/VLHZjC7.mp4','https://i.imgur.com/bohCLcd.mp4','https://i.imgur.com/CDtJruy.mp4','https://i.imgur.com/gC9gQl4.mp4','https://i.imgur.com/xN11CD2.mp4','https://i.imgur.com/BWMhwVR.mp4','https://i.imgur.com/NSlno5q.mp4','https://i.imgur.com/gQkZ6fN.mp4']
		var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("😒")==0 || body.indexOf("🙄")==0 || body.indexOf("🥴")==0 || body.indexOf("🥱")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "●❯────────────────❮●\n         -♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁𝐎𝐓♦-         \n●❯────────────────❮●\n🔰___কিরে বিলাই মুইখা_//-🐸😾___🔰\n●❯────────────────❮●",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
	}
}
