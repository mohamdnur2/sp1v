const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
        client.user.setActivity("NT",{type: 'PLAYING'});

});


client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


client.on('message', message => {
if(message.content.startsWith('1')) {
if(message.author.id !== "505678957752877056") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
});


client.on('ready', async() => {
var server = "522435937674854404"; // ايدي السررفر
var channel = "522435937674854410";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
});


client.login(process.env.BOT_TOKEN);
