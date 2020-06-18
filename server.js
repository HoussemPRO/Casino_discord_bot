const fs = require('fs');  //WESO#0001
const moment = require('moment');
const axios = require('axios').default;
const request = require('request');
const db = require('quick.db')
var Jimp = require('jimp');
const guild = require('guild');
const dateFormat = require('dateformat'); //npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$";
let Cooldown = new Set()
let cdsc = 60000;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



var prefix = "$";
let Cooldown = new Set()
let cdsc = 60000;




client.on('message', message => {
    if (message.content.startsWith('$nre')){
  const credits = require('./creditsCode.json');
  const path = './creditsCode.json';

   const args = message.content.split(' ');
const Player1 = message.author
const Player2 = message.mentions.members.first()
const own = ("713999106694971403")
        let amount = message.content.split(" ")[2]; 
                          let amount2 = Math.floor(amount - (amount * (7 / 100)));///3
                                let amount3 = Math.floor(amount2 + (amount * (5 / 100)));///3

let ammount3 = Math.floor( amount - amount3 )
        if (!Player2 || !amount || isNaN(amount)) return message.channel.send(`**Correct Usage Example: $nre @men 100 
 NOTE : - @men : منش الشخص الدي تريد ان تلعب معه**`); ///2

      if (!Player2)
            return message.reply("**Couldn't find that person? - لم استطع ايجاد الشخص**").then(m => m.delete(10000));
    if(Player1 === Player2) return message.channel.send(" لا يمكنك اللعب مع نفسك")
                    if(credits[Player1.id].credits < amount) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
                  if(credits[Player2.id].credits < amount) return message.channel.send(`** :thinking: | ${Player2}, Your balance is not enough for that!**`);


      message.channel.send(`**${Player1} VS ${Player2}**`).then(pl =>{
const embed = new Discord.RichEmbed()
.setTitle(`المبلغ : \`$${amount}\` `)
.setDescription(`**${Player2} لديك 3 دقايق لقبول او رفض الرهان**`)
.addField("قبول","✅",true )
.addField("رفض","❌",true )

.setFooter(message.author.username, message.author.avatarURL);  //WESO#0001
message.channel.send(embed).then(msgs2 =>{
        const rqembd = new Discord.RichEmbed()
      .setTitle(`لديك طلب رهان جديد :envelope:  `)
.setDescription(`**
الشخص : ${Player1}
المبلغ : \`$${amount}\`
الروم : ${message.channel}
**`)
      Player2.send(rqembd)
  
msgs2.react("✅").then(()=>{
msgs2.react("❌").then(()=>{
    const Yes = (reaction, user) => reaction.emoji.name === '✅' && user.id === Player2.id;
    const No = (reaction, user) => reaction.emoji.name === '❌' && user.id === Player2.id;
    const Yecc = msgs2.createReactionCollector(Yes, {time: 120000});
    const Noc = msgs2.createReactionCollector(No, {time: 120000});
  Yecc.on("collect", r=>{  
msgs2.delete();
                let num = Math.floor(Math.random() * 100)
            if (num > 50) {
                       credits[Player1.id].credits += (+amount2);
                      credits[Player2.id].credits += (-amount);
                      credits[own].credits += (+ammount3);

    const embed2 = new Discord.RichEmbed()
    .setTitle(`${num}`)
.setDescription(`**Winner : ${Player1}
added $${amount2} to your balance**`)
message.channel.send(embed2)

           const serverid = "722399393529200641"; 
const roomid = "722838706007965757";
client.guilds.get(serverid).channels.get(roomid).send(`** ${message.author} win \`$${amount2}\` ! - NRE GAME **`)
            }
            if (num < 50) {
                      credits[Player2.id].credits += (+amount2);
                      credits[Player1.id].credits += (-amount);
                      credits[own].credits += (+ammount3);

                  const embed3 = new Discord.RichEmbed()
    .setTitle(`${num}`)
.setDescription(`**Winner : ${Player2}
added $${amount2} to your balance**`)
message.channel.send(embed3)
           const serverid = "722399393529200641"; 
const roomid = "722838706007965757";
client.guilds.get(serverid).channels.get(roomid).send(`** ${Player2} win \`$${amount2}\` ! - NRE GAME **`)
    
          }
              fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

  })
  
   Noc.on("collect", r=>{  
 msgs2.delete();
     pl.delete();
message.channel.send(`**\`تم الرفض\`**`).then(m => m.delete(5000));
   })
})
})
})
})

      }
})


client.on('message', message => {
  
  const credits = require('./creditsCode.json');
  const author = message.author.id;
  const path = './creditsCode.json';

  if (message.content.startsWith('$roll')){
  //  let rank = message.guild.member(message.author).roles.find('name', 'HILO'); //لازم تعمل الرتبه دي في السيرفر  spamer
//if (!rank) return message.reply(' ** لفتح الامر يجب ان تدعو شخص لسيرفر ** ')
    
        let hl = message.content.split(" ")[1]; 
        let amount = message.content.split(" ")[2]; 
        if (!hl || !amount || isNaN(amount)) return message.channel.send(`**Correct Usage Example: $roll high/low 100**`); ///2

    if (isNaN(amount)) return message.reply(`amount need to be number `)
    if (amount < 0) return message.channel.send("Min amount is 500$ ")
        if (amount < 100) return message.channel.send(" Min amount is 100$ ")

            if (hl == 'high') { 
                  if(credits[author].credits < amount) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);

            let num = Math.floor(Math.random() * 10000)
            
            
            const winembd = new Discord.RichEmbed()
	.setColor('#008E44')

            .setTitle(`${num}`)
.setDescription(`**
You WON ! 
added \`$${amount}\` to your balance
**`)

                                      const lostembd = new Discord.RichEmbed()
                	.setColor('#A62019')
                      
        .setTitle(`${num}`)
.setDescription(`**
You LOST  :(
removed \`$${amount}\` from your balance
**`)
        
            if (num > 5000) { message.channel.send(winembd)
        credits[author].credits += (+amount);
           const serverid = "722399393529200641"; 
const roomid = "722838706007965757";
client.guilds.get(serverid).channels.get(roomid).send(`** ${message.author} win \`$${amount}\` ! - HILO GAME **`)
                            }
            if (5000 > num) { 
message.channel.send(lostembd)
        credits[author].credits += (-amount);

                            }
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

            }
    
                if (hl == 'low') { 
                                    if(credits[author].credits < amount) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
            let num = Math.floor(Math.random() * 10000)

                              
            const winembd = new Discord.RichEmbed()
	.setColor('#008E44')

            .setTitle(`${num}`)
.setDescription(`**
You WON ! 
added \`$${amount}\` to your balance
**`)

                                      const lostembd = new Discord.RichEmbed()
                	.setColor('#A62019')
                      
        .setTitle(`${num}`)
.setDescription(`**
You LOST  :(
removed \`$${amount}\` from your balance
**`)
                  
            if (num < 5000) { message.channel.send(winembd)
        credits[author].credits += (+amount);
           const serverid = "722399393529200641"; 
const roomid = "722838706007965757";
client.guilds.get(serverid).channels.get(roomid).send(`** ${message.author} win \`$${amount}\` ! - HILO GAME **`)
                            }
                  
            if (5000 < num)  { 
message.channel.send(lostembd)
        credits[author].credits += (-amount);

                            }
                  
                            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

                  
                }
    
    
};})






client.on("message", message => {
 const args = message.content.split(' ');
  const credits = require('./creditsCode.json');
  const xp = require('./creditsCode.json');
  const balance = args[2];

  const path = './creditsCode.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 0};
  if(!credits[mention.id]) credits[mention.id] = {credits: 0};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  fs.writeFile(path, JSON.stringify(xp, null, 5), function(err) {if(err) console.log(err)});

 
 
  if(message.content.startsWith(prefix + "balance")) {

    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`** :bank: |  ${mention.username}, your account balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  if(message.content.startsWith(prefix + "pay")) {

    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`,   type these numbers to confirm :**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | canaled**`);
        }
      });
    });
  }
  
  
  
     

  
  
let URID = "713999106694971403" //
  const balance2 = args[1];

  if(message.content.startsWith(prefix + "deposit")) { 
      if(!args[1]) {
        message.channel.send("**اكتب المبلغ الدي تريد ايداعه**")
      }
  if(args[1]) {

                                           if (isNaN(balance2)) return message.reply(`رقم فقط`)
                                   

                                                         if(isNaN(args[1]) || args[1] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the coins you want to buy! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:|اقل مبلغ يمكن ايداعه 2**`);   
    if(Cooldown.has(message.author.id)) return   message.reply("**لديك عملية شراء بلفعل **");

    let PP = Math.floor(balance2 * (1)) 
                    message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('#918383')
                    .setDescription(`**اكتب الامر التالي لأكمال عمليه الايداع
#credits <@${URID}> ${PP}
لديك 3 دقائق قبل الالغاء.**`));
    Cooldown.add(message.author.id);

                    let PP2 = Math.floor(PP - (PP * (5 / 100)));///3
                   let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${PP2}\` to <@${URID}> **`); 
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    }) .then(collected => { 
    Cooldown.delete(message.author.id)
           const serverid = "722399393529200641"; 
const roomid = "722414727715618848";
client.guilds.get(serverid).channels.get(roomid).send(`** ${message.author} has deposit \`$${balance2}\` id : \`${message.author.id}\` **`)
 message.channel.send(`**:moneybag: | ${message.author.username}, You have purchased  \`$${balance2}\` .**`);
          credits[author].credits += (+PP2);
    fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});        
      ;
    ;
               });
  }                         


  };
    setTimeout(() => {
Cooldown.delete(message.author.id)
}, cdsc * 3 ) 
  
});



client.on("message", message => {
  const credits = require('./creditsCode.json');
  const author = message.author.id;
  const path = './creditsCode.json';
 const args = message.content.split(' ');

  if(message.content.startsWith(prefix + "withdraw")) { 
      const houssem = args[1];

      if(!args[1]) {
        message.channel.send("**اكتب المبلغ الدي تريد سحبه**")
      }
  if(args[1]) {
                                               if (isNaN(houssem)) return message.reply(`رقم فقط`)

      if(credits[author].credits < houssem) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);

if ( houssem < 1000 ) return message.channel.send(`اقل مبلغ يمكن سحبه هو  $1000`)
    
            credits[author].credits += (-houssem);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});        
message.channel.send("** تمت عملية السحب بنجاح , يرجى الانتضار قليلا **")
    
            const serverid = "722399393529200641"; 
const roomid = "722414761043689543";
client.guilds.get(serverid).channels.get(roomid).send(`** ${message.author} has withdrawl \`$${houssem}\` id : \`${message.author.id}\` **`)
}
  }
});










client.login(process.env.BOT_TOKEN);

