//JavaScript
const Discord = require('Discord.js');

exports.run = function(client, message) { 

if (message.member.roles.cache.has("Rol ID")) return message.channel.send("Zaten JavaScript Rolüne Sahipsin")
message.member.roles.add("Rol ID");
message.channel.send(`Javcript Adlı Rol Verildi`);
};




exports.conf = { 
    enabled: true,
    guildOnly: false,
    aliases: ["Javascript"],
    premLevel: 0
};

    exprots.help = { 
        name: "js",
        description: "Kişiye JavaScript Rolü verir",
        usage: "js"
};