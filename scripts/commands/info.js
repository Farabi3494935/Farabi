module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
নাম       : 💥ফারাবী❤️‍🔥ইসলাম❤️‍🔥রনি💥
ফেসবুক :  Farabi islsm rony 
ধর্ম   : ইসলাম
স্থানীয় ঠিকানা: 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫, 𝐃𝐡𝐚𝐤𝐚
বর্তমান ঠিকানা: টাঙ্গাইল,ঢাকা
লিঙ্গু.   : ছেলে
বয়স           : ২৩+
সম্পর্ক : সিঙ্গেল
কাজ        : চাকরি
জিমেইল      : farabii708@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
হোয়াটসঅ্যাপে: wa.me/+966534079542
টেলিগ্রাম  : t.me/farabi0173210
ফেসবুক লিংক :https://www.facebook.com/farabi0173210 `,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.imgur.com/r3AT7yF.jpeg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
