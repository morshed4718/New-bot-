const fs = require("fs");
module.exports.config = {
	name: "bal",
    version: "1.1.1",
prefix: true,
	permssion: 3,
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
				body: "__এই শব্দ টার  মধ্যে যে কতটা ভালোবাসা,কষ্ট,রোমাঞ্চ,লুকিয়ে আছে! তুমি কি বুঝবে বাল!😕",
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
