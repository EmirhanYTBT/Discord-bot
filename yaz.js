const Discord = require('Discord.js')

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join('');
 if (mesaj.length < 1 ) return message.reply('Yazmam İçin Herhangi bir şey yazmalısın.')
 message.delete();
 message.channel.send(mesaj);
};

exprots.cond = { 
    aliases: ['söyle', 'say'],
    premLeve1: 0,
    kategori: 'genel'
};

exprots.help = { 
name:'yaz',
description:'İstediğiniz şeyi bota yazdırır.',
usage:'yaz'
};