module.exports.config = {
	name: "pending",
	version: "1.0.5",
	credits: "ryuko",
	prefix: false,
	permission: 2,
	description: "approve groups",
	category: "admin",
	cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "invaildNumber": "%1 không phải là một con số hợp lệ",
        "cancelSuccess": "dã từ chối thành công %1 nhóm!",
        "notiBox": "box của bạn đã được admin phê duyệt để có thể sử dụng bot",
        "approveSuccess": "dã phê duyệt thành công %1 nhóm!",

        "cantGetPendingList": "không thể lấy danh sách các nhóm đang chờ!",
        "returnListPending": "tổng số nhóm cần duyệt : %1 nhóm \n\n%2",
        "returnListClean": "「PENDING」Hiện tại không có nhóm nào trong hàng chờ"
    },
    "en": {
        "invaildNumber": "%1 is not an invalid number",
        "cancelSuccess": "refused %1 thread",
        "notiBox": "●❯────────────────❮●\n       -♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦-       \n●❯────────────────❮●\n-•|•- 𝐈 𝐜𝐨𝐦𝐢𝐧𝐠 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐠𝐫Ø𝐮𝐩 𝐂𝐚𝐲𝐛𝐞𝐫 𝐂𝐚𝐭 😺 𝐰𝐢𝐭𝐡 𝐓𝐚𝐧𝐯𝐢𝐫 _//-👅\n●❯────────────────❮●",
        "approveSuccess": "●❯────────────────❮●\n       -♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦-       \n●❯────────────────❮●\n🔰__𝐚𝐩𝐩𝐫𝐨𝐯𝐞𝐝 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 %1 𝐭𝐡𝐫𝐞𝐚𝐝𝐬__🔰\n●❯────────────────❮●",

        "cantGetPendingList": "can't get the pending list",
        "returnListPending": "the whole number of groups to approve is : %1 thread \n\n%2",
        "returnListClean": "●❯────────────────❮●\n       -♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦-       \n●❯────────────────❮●\n📣__𝐭𝐡𝐞𝐫𝐞 𝐢𝐬 𝐧𝐨 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐭𝐡𝐞 𝐩𝐞𝐧𝐝𝐢𝐧𝐠 𝐥𝐢𝐬𝐭__😻\n●❯────────────────❮●"
    }
}

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("cancelSuccess", count), threadID, messageID);
    }
    else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.sendMessage(getText("notiBox"), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("approveSuccess", count), threadID, messageID);
    }
}

module.exports.run = async function({ api, event, getText }) {
	const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;

    try {
		var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
		var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
	} catch (e) { return api.sendMessage(getText("cantGetPendingList"), threadID, messageID) }

	const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(getText("returnListPending", list.length, msg), threadID, (error, info) => {
		global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
	}, messageID);
    else return api.sendMessage(getText("returnListClean"), threadID, messageID);
}
