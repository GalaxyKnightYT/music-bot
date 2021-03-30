const { MessageEmbed, Message } = require('discord.js');
const db = require('quick.db');
const Discord = require('discord.js')

module.exports = {
    name: "help",
    async run (client, message, args) {
        const embed = MessageEmbed()
        .setTitle('Help Panel')
        .addField('Play', '-play <song> \n-add <song> \n-join')
        .addField('Stop', '-stop \n-kill \n-destroy \n-leave')
        .addField('Now Playing', '-np \n-nowplaying \n-current')
        .addField('Skip', '-skip \n-next')
        .addField('Queue', '-queue \n-list \n-show')
        .addField('Volume', '-volume <0-100> \n-setvolume <0-100>')
        .addField('Other', '-pause \n-resume \n-remove <song number in the queue>\n-delete <song number in the queue> \n-lyrics <song>')
        .setColor("RED")
        .setTimestamp()
        
        message.channel.send(embed)
    }
}