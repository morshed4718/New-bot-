
const fs = require("fs");
module.exports.config = {
	name: "Leo",
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
	if(react.includes("leo") || react.includes("Leo🤬") || react.includes("Leo")) {
		var msg = {
				body: "আমি সিংগেল হিহিহিহি😁😁",
			}
	api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
