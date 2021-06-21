const Discord = require('discord.js'); 
const client = new Discord.Client();

const config = require ('./config.json')
const firstMessage = require ('./first-message')

const command = require('./command')

command (client, 'embed', (message) => {
  console.log(message.author)

  const embed = new Discord.MessageEmbed()
  .setTitle('Cliack for embed')
  .setURL('https://discord.gg/7rwn6rhZ')
  .setAuthor(message.author.username)

  message.channel.send(embed)
})

  command(client, 'createtextchannel', (message) => {
    const name = message.content.replace('!createtextchannel', '')

    message.guild.channels.create(name, {
      type: 'text'
    })
    .then(channel => {
      console.log(channel)
      const categoryId = '724607624640987159'
      channel.setParent(categoryId)
      //general category idsi textchannel icin
    })
  })

  command(client, 'createvoicechannel', (message) => {
    const name = message.content.replace('!createvoicechannel', '') 

    message.guild.channels.create(name, {
      type: 'voice'
    })
    .then((channel) => {
      const categoryId = '724607624640987159'
      channel.setParent(categoryId)
      //general category idsi voicechannel icin
      
    })
    
  })

client.on('ready', () => {
	console.log('Bot suan aktif!');

  firstMessage(client, '788478647450992741', 'hello world', ['🔥'] )

  command(client,['!sa'], message => {
    message.channel.send('as')
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

