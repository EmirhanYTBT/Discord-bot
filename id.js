const Discord = require('discord.js');
exprots.run = async (Client, message, args) => { 
let kişi = message.mentions.members.first() || message.author;
message.channel.send(`**${kişi}** adlı Kişinin ID numarası **${kişi.id}** idir.`);
};
exports.conf = { 
enabled: true,
guildOnly: false,
aliases: ["ıd", "id","ID"],
premLevel: 0
};

exprots.help = { 
name: "id",
description: "Kiişinin ID numarasını Gösterir.",
usage: "id"
};