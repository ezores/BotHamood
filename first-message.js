const addReactions = (message, reactions) => {
  message.react(reactions[0])
  reactions.shift()
  if (reactions.lenght > 0) {
    setTimeout(() => addReactions(message, reactions), 750)
  }
}
module.exports = async (client, id, text, reactions = []) = {
  const channel = await client.channels.fetch(id)
  // ("Burda const channelda hata var")

channel.messages.fetch().then((messages) => {
  if (message.size === 0) {
    channel.send(text).then(message => {
      addReactions(message, reactions)
    })
  }
})
}