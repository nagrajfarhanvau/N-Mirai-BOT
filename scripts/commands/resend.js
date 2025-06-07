module.exports.config = {
  'name': "resend",
  'version': "2.0.0",
  'permssion': 0,
  'credits': "Thọ, ManhG Fix Ver > 1.2.13",
  'description': "Là resend thôi",
  'prefix': true,
  'category': "general",
  'usages': '',
  'cooldowns': 0x0,
  'hide': true,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.handleEvent = async function ({
  event: e,
  api: a,
  client: t,
  Users: s
}) {
  const n = global.nodemodule.request;
  const o = global.nodemodule.axios;
  const {
    writeFileSync: d,
    createReadStream: r
  } = global.nodemodule["fs-extra"];
  let {
    messageID: g,
    senderID: l,
    threadID: u,
    body: c
  } = e;
  if (!global.logMessage) {
    global.logMessage = new Map();
  }
  if (!global.data.botID) {
    global.data.botID = a.getCurrentUserID();
  }
  const i = global.data.threadData.get(u) || {};
  if ((undefined === i.resend || 0 != i.resend) && l != global.data.botID && ("message_unsend" != e.type && global.logMessage.set(g, {
    msgBody: c,
    attachment: e.attachments
  }), "message_unsend" == e.type)) {
    var m = global.logMessage.get(g);
    if (!m) {
      return;
    }
    let e = await s.getNameUser(l);
    if (null == m.attachment[0]) {
      return a.sendMessage(`╭──────•◈•───────╮\n         ♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁Ø𝐓♦      \n\nকই গো সবাই দেখুন🥺 ,@${e} এই লুচ্ছায় মাত্র👉 \"${m.msgBody}\"👈এই টেক্সট টা রিমুভ দিছে😁\n\n  -♦𝐁Ø𝐒𝐒 𝐓𝐀𝐍𝐕𝐈𝐑♦-\n╰──────•◈•───────╯`, u);
    }
    {
      let t = 0;
      let s = {
        body: `@${e}এই হালায় এই মাত্র এইডা রিমুভ দিছে🍁😒 সবাই দেখে নেও🐸😁${"" != m.msgBody ? `\n\nContent: ${m.msgBody}` : ""}`,
        attachment: [],
        mentions: {
          tag: e,
          id: l
        }
      };
      for (var f of m.attachment) {
        t += 1;
        var h = (await n.get(f.url)).uri.pathname;
        var b = h.substring(h.lastIndexOf(".") + 1);
        var p = __dirname + `/cache/${t}.${b}`;
        var y = (await o.get(f.url, {
          responseType: "arraybuffer"
        })).data;
        d(p, Buffer.from(y, "utf-8"));
        s.attachment.push(r(p));
      }
      a.sendMessage(s, u);
    }
  }
};
module.exports.languages = {
  vi: {
    on: "Bật",
    off: "Tắt",
    successText: "resend thành công"
  },
  en: {
    on: "on",
    off: "off",
    successText: "resend success!"
  }
};
module.exports.run = async function ({
  api: e,
  event: a,
  Threads: t,
  getText: s
}) {
  const {
    threadID: n,
    messageID: o
  } = a;
  let d = (await t.getData(n)).data;
  if (undefined === d.resend || 0 == d.resend) {
    d.resend = true;
  } else {
    d.resend = false;
  }
  await t.setData(n, {
    data: d
  });
  global.data.threadData.set(n, d);
  return e.sendMessage(`${1 == d.resend ? s("on") : s("off")} ${s("successText")}`, n, o);
};
