const fs = require("fs");
module.exports.config = {
	name: "miya kholifa",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("miya kholifa") || react.includes("miakholofa") || react.includes("mia kholifa")) {
		var msg = {
				body: "__বাঈনচোদ Mia kholifa তোর আম্মু লাগে🥵💔!! 🖇️লিংক🥵বা📹ভিডিও🥵লাগলে বস 𝗠𝗼𝗿𝘀𝗵𝗘𝗱 কে নক কর মাদারবোর্ড🥵!! 😁👉FB LINK :https://www.facebook.com/profile.php?id=100075133524968&mibextid=ZbWKwL🥵👍",
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
