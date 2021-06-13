const Discord = require('discord.js'); 
const client = new Discord.Client();

const config = require ('./config.json')
const firstMessage = require ('./first-message')

const command = require('./command')

client.on('ready', () => {
	console.log('Bot suan aktif!');

  firstMessage(client, '788478647450992741', 'hello world', ['🔥'] )

  command(client,['ping', 'test'], message => {
    message.channel.send('pong!')
  })

  command(client, 'server', message => {
    client.guilds.cache.forEach(guild => {
      message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`
      )
    })
  })

  command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
  })

  command(client, 'status', message => {
    const content = message.content.replace('!status', '')
    //"!status hello world" -> "hello world"
    client.user.setPresence ({
      activity: {
        name: content,
        type: 0, 
      }, 
    })
    
  })
});

client.login(config.token)

