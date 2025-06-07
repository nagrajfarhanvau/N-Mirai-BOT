module.exports.config = {
	name: "god",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Nayan",
	description: "record bot activity notifications",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../Nayan/catalogs/Nayanc.js");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "bot notification" +
                        "\n\nthread id : " + event.threadID +
                        "\naction : {task}" +
                        "\nuser id : " + event.author +
                        "\ndate : " + Date.now() +" ",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "name does not exist",
                    newName = event.logMessageData.name || "name does not exist";
            task = "user changes group name from : '" + oldName + "' to '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "💔___ব্ঁস্ঁ কে্ঁ যে্ঁনো্ঁ আ্ঁমা্ঁর্ঁ এ্ঁ এ্ঁক্ঁটা্ঁ গ্রু্ঁপে্ঁ এ্ঁড্ঁ ক্ঁর্ঁছে্ঁ___😩";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = " 🥺___ব্ঁস্ঁ আ্মাঁরে্ঁ কে্ঁ যে্ঁন্ঁ এ্কঁটা্ঁ গ্রু্ঁপ্ঁ থেকে কি্ঁক্ঁ দি্ঁছে্ঁ___💔 "
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger("", "");
    });
  return api.sendMessage(formReport, global.config.ADMINBOT[0]);
}

