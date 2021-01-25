const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) =>{
   
    var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));
    if (!member) member = message.member;
    var joinedserver = new Date(member.joinedTimestamp).toLocaleString()
    
    let myGuild = message.guild;
    let memberCount = myGuild.memberCount;
    var Embed = new discord.MessageEmbed()
        .setColor("#0a63c9")
        .setTitle("**__Server Info__**")
        .addFields(
            { name: '\u200B', value: '\u200B'},
            { name: "Server info:", value: ` Naam: **${message.guild.name}**\n Gemaakt op: **${moment(message.guild.createdAt).format('LL')}**\n Regio: **${message.guild.region}**\n Regels kanaal: ${message.guild.rulesChannel}\n Eigenaar: ${message.guild.owner.user}`},
            { name: "Leden + online leden:", value: ` 🌍  | Totaal aantal leden: **${memberCount}**\n 🤖  | Aantal bots: **${message.guild.members.cache.filter(m => m.user.bot).size}**\n 👀  | Online: **${message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size}**`},
            { name: "Soorten kanalen + aantal:", value: ` 💬  | tekst: **${message.guild.channels.cache.filter(chan => chan.type == "text").size}**\n 🔊  | spraak: **${message.guild.channels.cache.filter(chan => chan.type == "voice").size}**`},
            { name: '\u200B', value: '\u200B'},
        )

        .setThumbnail(`${message.guild.iconURL({ size: 4096 })}`)
        .setImage("https://i.ibb.co/9HCptZT/rainbow.gif")
        .setFooter("RoTimBo") .setTimestamp();
        

    message.channel.send(Embed);

}
module.exports.help = {
    name: "serverinfo"
}
