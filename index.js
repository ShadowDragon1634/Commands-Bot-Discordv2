const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

//Inserire anche su discord.dev i Gateway.
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

//Inserire il token del bot che si trova su discord.dev
client.login("TOKEN BOT");

client.once('ready', () => {
   console.log("Bot Online");
   //Inserire un testo a piacimento sul setActivity
   client.user.setActivity('text activity', { type: ActivityType.Listening });
})
client.on('messageCreate', message => {
    if(message.content.startsWith('!say')){
        message.delete()
        const args = message.content.split(/ +/)
        const text = args.slice(1).join(' ')
        message.channel.send(text)
    }
})
client.on('messageCreate', message => {
    if(message.content.startsWith('!help')){
        message.channel.send("**Lista Comandi**")
        message.channel.send("1. comando1")
        message.channel.send("2. comando2")
        message.channel.send("3. comando3")
        message.channel.send("4. comando4")
    }
})