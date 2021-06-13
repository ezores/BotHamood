const Discord = require('discord.js'); 
const client = new Discord.Client();
const config = require ('./config.json')

client.on('ready', () => {
	console.log(`Çorbaci bot ${client.user.tag}Sunucuya girdi!`);
});

client.login(config.token)
