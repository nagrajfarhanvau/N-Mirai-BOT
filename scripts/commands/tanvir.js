const fs = require("fs");
module.exports = {
	config:{
	name: "tanvir",
	version: "1.0.1",
	premium: false,	
        prefix: true,
	permssion: 0,
	credits: "Alvi", 
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
	const NAYAN = ["https://i.imgur.com/doMOOMF.mp4",]
		var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("Tanvir")==0 || body.indexOf("Tanvir vai")==0 || body.indexOf("Tanvir vi")==0 || body.indexOf("tanvir")==0 || body.indexOf("tanvir")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "♦️___☠︎︎-꙰𝗕Ø𝗦𝗦 𝗧𝗔𝗡𝗩꙰𝗜𝗥-☠︎___♦️",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
	}
}
