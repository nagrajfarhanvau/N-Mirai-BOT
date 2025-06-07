const axios = require('axios');
const fs = require('fs');

module.exports.config = {
    name: "sexvideo", 
    version: "1.0.0", 
    permssion: 0,
    premium: false,
    prefix: true,
    credits: "ALVI",
    description: "SOME SEX VIDEO BY X2 SERVER",
    category: "VIDEO", 
    usages: "/videosex",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    try {
      const rt = await axios.get("https://x2-video-api.onrender.com/videosex")
      const url = rt.data.resultX2.data;
        const response = await axios.get(url, { responseType: "stream" });

        const videoPath = './sex_video.mp4';
        const writer = fs.createWriteStream(videoPath);

        response.data.pipe(writer);

        writer.on('finish', () => {
            api.sendMessage({ body: "●❯────────────────❮●\n   -♦𝗕Ø𝗦𝗦 𝗧𝗔𝗡𝗩𝗜𝗥♦-   \n●❯────────────────❮●", attachment: fs.createReadStream(videoPath) }, event.threadID);
        });

        writer.on('error', (err) => {
            console.error(err);
        });
    } catch (e) {
        console.log(e);
    }
};
