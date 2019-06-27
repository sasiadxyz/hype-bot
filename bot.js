
const Discord = require("discord.js");
const format = require('date-format');
const { Client, RichEmbed } = require("discord.js");
const auth = require("./auth.js");
const misc = require("./misc.js");
const sleep = ms => new Promise(res => setTimeout(res, ms));
const client = new Discord.Client();
const swearwords = ["fuck", "shit", "bitch", "nude", "niger", "kys", "kyz"]
var toggle = true;
const Your_Server_Id = "";
const ADMIN_ROLE_ID = [""];
const min = ["m","min","minutes"]
const hours = ["h","hours"];
const day = ["day","days","d"]
const mutedRoleName = "muted";
const prefix = "-";
const name = "HypeBot";



client.login(auth.token);


client.on("messageUpdate", (old, msg) => {
  if(msg.author.bot || msg.channel.type === "dm") return;
  if(ADMIN_ROLE_ID.length == 0) {
    msg.channel.send("PLASE ADD ADMIN_ROLE_ID IN BOT!!!");
    adm(msg);
    return;
  }
  for(var y = 0;y <= ADMIN_ROLE_ID.length;y++) {
    if(msg.guild.members.get(msg.author.id).roles.has(ADMIN_ROLE_ID[0])) {
      adm(msg);
      return;
    }
  }
    user(msg);
});

misc.log("starting...");


client.on("message", msg => {
  if(msg.author.bot || msg.channel.type === "dm") return;
  if(ADMIN_ROLE_ID.length == 0) {
    msg.channel.send("PLASE ADD ADMIN_ROLE_ID IN BOT!!!");
    adm(msg);
    return;
  }
  for(var y = 0;y <= ADMIN_ROLE_ID.length;y++) {
    if(msg.guild.members.get(msg.author.id).roles.has(ADMIN_ROLE_ID[0])) {
      adm(msg);
      return;
    }
  }
    user(msg);
});


client.on("ready", () => {
  misc.log("IIN Entertainment HypeBot 1.0.0 bot");
  client.user.setActivity("Type -help");
  nick();
});
//DM COMMAND ALLOWS YOU TO MESSAGE EVERY SINGLE PERSON ON THE SERVER IN DM MESSAGE
  

function user(msg) {
  const args = msg.content.split(/ +/);
  const cmd = args.shift().toLowerCase();
  if(msg.author.bot || msg.channel.type === "dm") return;
  if(toggle) {
  words(msg);
  if (cmd === (prefix + 'contact')) {
    let embed = new RichEmbed()
    .setTitle("HYPE BOT - Contact Us :telephone_receiver:")
    .setColor(0XF0000)
    .setDescription("Below are the options for contacting us in case of errors with the bot.")
    .addField("Discord Server - IINCode Community", "https://discord.gg/rfEAfyr")
    .addField("Discord Server - IINEntertainment", "https://discord.gg/sTPfyUS")
    .addField("E-mail", "noreply@ycsv.pl")
    .addField("DM Message", "1. Bin#4027 2. wojtess#0443 3. Sasiad_janusz#8560")
    .addField("We will try to answer as soon as possible.", "Choose the most convenient options for you.")
    .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
    msg.channel.send(embed)
    return;
  }
  }
}



//COMMANDS ADMINS
function adm(msg) {
  const args = msg.content.split(/ +/);
  const cmd = args.shift().toLowerCase();
  if(msg.author.bot || msg.channel.type === "dm") return;
  togglefunc(msg);
  if(toggle == true) {
    if (cmd === (prefix + 'contact')) {
    let embed = new RichEmbed()
    .setTitle("HYPE BOT - Contact Us :telephone_receiver:")
    .setColor(0XF0000)
    .setDescription("Below are the options for contacting us in case of errors with the bot.")
    .addField("Discord Server - IINCode Community", "https://discord.gg/rfEAfyr")
    .addField("Discord Server - IINEntertainment", "https://discord.gg/sTPfyUS")
    .addField("E-mail", "noreply@ycsv.pl")
    .addField("DM Message", "1. Bin#4027 2. wojtess#0443 3. Sasiad_janusz#8560")
    .addField("We will try to answer as soon as possible.", "Choose the most convenient options for you.")
    .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
    msg.channel.send(embed)
  } else
  if (cmd === (prefix + 'dm')) {
    let embed = new RichEmbed()
      .setTitle("HYPE BOT - Information :information_source:")
    .setColor(0XF0000)
      .addField("Everyone on this server has received a private message with your text.", "If not - contact with IINCode Staff. Use `-contact` command")
      .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
      msg.channel.send(embed)
    try{
      let text = msg.content.slice(3);
      msg.guild.members.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);
      });
    }catch(e) {
      
  }
  } else
  if(cmd === (prefix + 'clear')) {
    try{
      msg.delete(0).then( () => {
        msg.channel.bulkDelete(parseInt(args[0])).then( () => {
        let embed = new  RichEmbed()
        .setTitle("HYPE BOT - Channels Cleaning :wastebasket:")
        .setColor(0x7FFF00)
        .addField("Channels Cleaning System has deleted " + parseInt(args[0]) + " messages.", "If you want to delete more messages, type `-clear <number of messages you want to remove, max 100>`")
        .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
        msg.channel.send(embed)
        });
      });
      }catch(e) { 
       let embed = new  RichEmbed()
        .setTitle("HYPE BOT - Channels Cleaning Error")
        .setColor(0x7FFF00)
        .addField("Channels Cleaning System catch an eror!", "try again! Max messages to clean is 100")
        .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
        msg.channel.send(embed)
      }
  } else
    if(cmd === prefix + 'ban') {  
      if(msg.mentions.members.first()) {
       var member = msg.mentions.members.first();
        if(msg.guild.members.get(msg.author.id).highestRole.position > msg.guild.members.get(member.id).highestRole.position) {
      if(args[1]) {
        member.send("You are banned from: "+msg.guild.name);
        msg.guild.ban();
        let embedTrue = new RichEmbed() //nie pidałeś kogo zbanować
          .setTitle("HYPE BOT - Ban/Kick System")
          .addField("Success!", "Succesfully banned user " + member.name.tag)
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedTrue)
          
      } else {
        member.send("You are banned from: "+ msg.guild.name);
        member.ban();
        let embedTrue = new RichEmbed()
          .setTitle("HYPE BOT - Ban/Kick System")
          .addField("Success!", "Succesfully banned user " + member.name.tag)
           .setColor(0xFF0000)
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#856.tag0 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedTrue)
          
      }
        } else {
          let embedRanga = new RichEmbed() //nie możesz bo ten kogo chcesz zbanować ma zbyt eysoką rangę(wyrzszą lub równą niz ty masz)
          .setTitle("HYPE BOT - Ban/Kick System Error")
          .setColor(0xFF0000)
          .addField("You can't ban user with rank higher than yours.", "Try someone else.")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedRanga)
          }
      } else {
          let embedTrue = new RichEmbed() //nie pidałeś kogo zbanować tutaj jest
          .setTitle("HYPE BOT - Ban/Kick System Error")
          .setColor(0xFF0000)
          .addField("Problably you did't pinged user you want to ban.", "Please try again.")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedTrue)
          }
    } else
    if(cmd === prefix + "kick") {
      if(msg.mentions.members.first()) {
        if(args[1]) {
          var t = msg.mentions.members.first();
          if(msg.guild.members.get(msg.author.id).highestRole.position > msg.guild.members.get(t.id).highestRole.position) {
          t.send("You are kicked out from server " + msg.guild.name + " for: ``" + msg.content.split(" ").slice(2).join(" ") +"``").then( () => {
            try{
             let embedTrue = new RichEmbed()
             .setTitle("HYPE BOT - Ban/Kick System")
             .setColor(0x7FFF00)
             .addField("Success!", "Succesfully kicked " + t.user.tag + " from server!")
             .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
             msg.channnel.send(embedTrue)
              t.kick();
          }catch(e) {
             let embedFalse = new RichEmbed()
             .setTitle("HYPE BOT - Ban/Kick System Error")
             .setColor(0xFF0000)
             .addField("You can't kick this user.", "Probably he/she is `administrator`.")
             .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
             msg.channel.send(embedFalse)
          }
          })//ja źle robię napisy, najlepiej jak ktoś to doda. ok. ja przetłumacze 
          } else {
            let embedRanga = new RichEmbed() //nie możesz bo ten kogo chcesz zbanować ma zbyt eysoką rangę(wyrzszą lub równą niz ty masz)
            .setTitle("HYPE BOT - Ban/Kick System Error")
            .setColor(0xFF0000)
            .addField("You can't kick user with rank higher than yours.", "Try someone else.")
            .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
            msg.channel.send(embedRanga)
            }
          } else {
          var t = msg.mentions.members.first();
            if(msg.guild.members.get(msg.author.id).highestRole.position > msg.guild.members.get(t.id).highestRole.position) {
          t.send("You are kicked out from server " + msg.guild.name).then( () => {
            try{
          t.kick()
             let embedTrue = new RichEmbed()
             .setTitle("HYPE BOT - Ban/Kick System")
             .setColor(0x7FFF00)
             .addField("Success!", "Succesfully kicked " + t.user.tag + " from server!")
             msg.channnel.send(embedTrue)
            }catch(e){
             let embedTrue = new RichEmbed()
             .setTitle("HYPE BOT - Ban/Kick System")
             .setColor(0x7FFF00)
             .addField("Success!", "Succesfully kicked " + t.user.tag + " from server!")
             msg.channel.send(embedTrue)
          }
          });
        } else {
            let embedRanga = new RichEmbed() //nie możesz bo ten kogo chcesz zbanować ma zbyt eysoką rangę(wyrzszą lub równą niz ty masz)
            .setTitle("HYPE BOT - Ban/Kick System Error")
            .setColor(0xFF0000)
            .addField("You can't kick user with rank higher than yours.", "Try someone else.")
            .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
            msg.channel.send(embedRanga) //nie możesz bo ten kogo chcesz zbanować ma zbyt eysoką rangę(wyrzszą lub równą niz ty masz)
        }
       }
      } else {
             let embedFalse = new RichEmbed()
             .setTitle("HYPE BOT - Ban/Kick System Error")
             .setColor(0xFF0000)
             .addField("Probably you did not pinged user for kick.", "Please try again.")
             .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
             msg.channel.send(embedFalse)
             }
    } else
    if(cmd === prefix + 'help') {
      let embed = new RichEmbed()
      .setTitle("HYPE BOT - List of avalible commands")
      .setColor(0XF0000)
      .addField(prefix + "toggle", "Turns the bot on or off.")
      .addField(prefix + "ban `@user`", "Temporarily ban user.")
      .addField(prefix + "kick `@user`", "Throws the user out of the server.")
      .addField(prefix + "clear `number of messages`", "clears messages.")
      .addField(prefix + "tempmute `@user`", "Temporarily silences the user.")
      .addField(prefix + "mute `@user`", "Silences the user for an indefinite period of time.")
      .addField(prefix + "unmute `@user`","Unmutes muted user.")
      .addField(prefix + "unban `user ID`", "Unban the banned user")
      .addField(prefix + "tempban `@user`", "Ban user for an indefinite period of time.")
      .addField(prefix + "contact", "Contact with bot developers.")
      .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
      msg.channel.send(embed)
    } else
    if(cmd === prefix + 'tempmute') {
      if(msg.guild.roles.find(m => m.name == mutedRoleName)) {
       if(msg.mentions.members.first() && args[2]) {
          var member = msg.guild.member(msg.mentions.users.first().id);
          if(msg.guild.members.get(msg.author.id).highestRole.position > msg.guild.members.get(member.id).highestRole.position) {
          var role = msg.guild.roles.find(m => m.name == mutedRoleName);
          var f = msg.content.split(" ").slice(3).join(" ");
            
            var g = new RichEmbed()
          .setTitle("HYPE BOT - Mute System Error")
          .setColor(0xFF0000)
          .addField(member.user.tag + " is muted for " + args[0] + " because of: " + f, "")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          if(czyZawiera(msg.content,min)) {
            member.send("You have been muted for" + parseInt(args[1]) +  " minutes! Because of: ``" + f + "``" + " in: ``" + msg.guild.name + "``");
            msg.channel.send(g);
            tempmute(member,role,60000 * parseInt(args[1]));
          } else 
          if(czyZawiera(msg.content,hours)) {
            member.send("You have been muted for" + parseInt(args[1]) +  " hours! Because of: ``" + f + "``" + " in: ``" + msg.guild.name + "``");
            msg.channel.send(g);
            tempmute(member,role,3600000 * parseInt(args[1]));
          } else
          if(czyZawiera(msg.content,day)) {
            member.send("You have been muted for" + parseInt(args[1]) +  " days! Because of: ``" + f + "``" + " in: ``" + msg.guild.name + "``");
            msg.channel.send(g);
            tempmute(member,role,86400000 * parseInt(args[1]));
          } else {
            let embedCzas = new RichEmbed()
            .setTitle("HYPE BOT - Mute System Error")
            .addField("Probably you didn't specify a mute time.", "Enter the time in minutes [m], hours [h] or days [d] and try again.")
            .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
            msg.channel.send(embedCzas)
          }
          } else {
            let embed = new RichEmbed()
            .setTitle("HYPE BOT - Mute System Error")
            .addField("The person you want to mute is higher rank then you", "If not please try contacting IIN Staff for investigation.")
            .setColor(0xFF0000)
            .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
            msg.channel.send(embed)
          }
      } else 
      if(msg.mentions.members.first() && args[1]) {
         var member = msg.guild.members.get(msg.mentions.users.first().id);
        if(msg.guild.members.get(msg.author.id).highestRole.position > msg.guild.members.get(member.id).highestRole.position) {
        var role = msg.guild.roles.find(m => m.name == mutedRoleName);
          console.log(msg.mentions.users.first());
          var g = new RichEmbed()
          .setTitle("HYPE BOT - Mute System")
          .setColor(0xFFF00)
          .addField("Success!", member.user.tag + " has muted for " + args[1] + " !") ///args[1]
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
        if(czyZawiera(msg.content,min)) {
          member.send("you have been muted for" + parseInt(args[1]) +  " minutes! in: ``" + msg.guild.name + "``");
          msg.channel.send(g)
          tempmute(member,role,60000 * parseInt(args[1]));
        } else 
        if(czyZawiera(msg.content,hours)) {
          member.send("you have been muted for" + parseInt(args[1]) +  " hours! in: ``" + msg.guild.name + "``");
          msg.channel.send(g);
          tempmute(member,role,3600000 * parseInt(args[1]));
        } else
        if(czyZawiera(msg.content,day)) {
          member.send("you have been muted for" + parseInt(args[1]) +  " days! in: ``" + msg.guild.name + "``");
          msg.channel.send(g);
          tempmute(member,role,86400000 * parseInt(args[1]));
        } else {
          let embedCzas = new RichEmbed()
          .setTitle("HYPE BOT - Mute System Error")
          .setColor(0x7FFF00)
          .addField("Probably you did not specify a mute time.", "Enter the time in minutes [m], hours [h] or days [d] and try again.")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedCzas)
        }
        } else {
          let embedRanga = new RichEmbed()
          .setTitle("HYPE BOT - Mute System Error")
          .setColor(0xFF0000)
          .addField("You can't mute users with a rank higher than yours.", "Try someone else.")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedRanga)
          }
      } else {
        let embed = new RichEmbed()
        .setTitle("HYPE BOT - Mute System")
        .setColor(0xFF0000)
        .addField("Probably you didn't pinged user you want to mute or didn't write mute time.", "Please try again.") 
        .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")//TODO: INNY EMBED
        msg.channel.send(embed)
      }
      } else {
        msg.author.send("created new role" + mutedRoleName + " which is muted role or something like that. Don't ask. really. It is under role:" + msg.guild.members.get(client.user.id).highestRole.name);
        createMuteRole(msg);
      }
    } else
    if(cmd === prefix + "tempban") {
      if(msg.mentions.members.first()) {
        var member1 = msg.mentions.users.first();
        var member = msg.guild.members.get(member1.id);
        if(msg.guild.members.get(msg.author.id).highestRole.position > msg.guild.members.get(member.id).highestRole.position) {
        if(args[0]) {
        if(czyZawiera(msg.content,min)) {
          member1.send("you have a ban in: `" + msg.guild.name + "`");
          tempban(member,msg.guild,parseInt(args[2]) * 60000);
          return;
        } else 
        if(czyZawiera(msg.content,hours)) {
          member.send("You got banned for " + msg.guild.name);
          tempban(member,msg.guild,parseInt(args[2]) * 3600000);
          return;
        } else
        if(czyZawiera(msg.content,day)) {
          member.send("You got banned for " + msg.guild.name);
          tempban(member,msg.guild,parseInt(args[2]) * 86400000);
          return;
        }
        } else {
          let g = msg.content.split(" ").slice(3).join(" ");
          if(czyZawiera(msg.content,min)) {
            
          member.send("You got banned for" + msg.guild.name +"because of " + g);
          tempban(member,msg.guild,parseInt(args[2]) * 60000);
          
          return;
          } else 
        if(czyZawiera(msg.content,hours)) {
          member.send("You got banned for " + msg.guild.name);
          tempban(member,msg.guild,parseInt(args[2]) * 3600000);
          return;
        } else {
          member.send("You got banned for " + msg.guild.name);
          tempban(member,msg.guild,parseInt(args[2]) * 86400000);
          return;
        }
        } 
      } else {
        let embed = new RichEmbed()
        .setTitle("HYPE BOT - Ban/Kick System Error")
        .setColor(0xFF0000)
        .addField("You can't ban user with a rank higher than yours.", "Try someone else.")
        .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
        msg.channel.send(embed)
      }
      }else {
        let embed = new RichEmbed()
        .setTitle("HYPE BOT - Ban/Kick System Error")
        .setColor(0xFF0000)
        .addField("Probably you did not pinged user you want to ban temporarily.", "Please try again")
        .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
        msg.channel.send(embed)
       }
    } else {
      if(cmd === prefix + "unban") {
        if(args[0]) {
          msg.guild.unban(args[0]);
          let embedTrue = new RichEmbed()
          .setTitle("HYPE BOT - Ban/Kick System")
          .setColor(0x7FFF00)
          .addField("Success!", "Great! User has succesfully unbanned!")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedTrue)
        } else {
          let embedFalse = new RichEmbed()
          .setTitle("HYPE BOT - Ban/Kick System Error")
          .setColor(0xFF0000)
          .addField("Probably you did not entered the id of user for unban.", "Please try again.")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedFalse)
        }
      } else if(cmd === prefix + "mute") {
        if(msg.guild.roles.find(m => m.name == mutedRoleName)) {
          let role = msg.guild.roles.find(m => m.name == mutedRoleName);
          let member = msg.guild.members.get(msg.mentions.users.first().id);
          if(member) {
            if(msg.guild.members.get(msg.author.id).highestRole.position > member.highestRole.position) {
            if(!args[1]) {
              member.addRole(role.id);
              let embedMuted = new RichEmbed()
              .setTitle("HYPE BOT - Mute System")
              .setColor(0x7FFF00)
              .addField("Success!", "User " + member.user.tag + " been muted!")
              .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
              msg.channel.send(embedMuted)
            } else {
              let f = msg.content.split(" ").slice(2).join(" ");
              member.addRole(role.id);
              member.send("zmutowano ciebie :("); 
              let embedUdaloSie = new RichEmbed()
              .setTitle("HYPE BOT - Mute System")
              .setColor(0x7FFF00)
              .addField("Success!", "User " + member.user.tag + " has been muted for " + f + " !")
              .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
              msg.channel.send(embedUdaloSie)
            }
          } else {
            let embedNie = new RichEmbed()
            .setTitle("HYPE BOT - Mute System Error")
            .setColor(0xFF0000)
            .addField("You can't mute users with a rank higher than yours.","try again")
            .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#402", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
            msg.channel.send(embedNie)
          }
        } else {
          let embedOznacz = new RichEmbed()
          .setTitle("HYPE BOT - Mute System Error")
          .setColor(0xFF0000)
          .addField("Probably you did not pinged user you want to mute.", "Please try again.")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedOznacz)
        }
        } else {
          createMuteRole(msg);
        }
      }else 
      if(cmd === prefix + "unmute") {
        if(msg.guild.roles.find(m => m.name == mutedRoleName)) {
          let role = msg.guild.roles.find(m => m.name == mutedRoleName);
          let member = msg.guild.members.get(msg.mentions.users.first().id);
          if(member) {
            if(msg.guild.members.get(msg.author.id).highestRole.position > msg.guild.members.get(member.id).highestRole.position) {
            if(member.roles.has(role.id)) {
              if(!args[1]) {
                member.removeRole(role.id);
                let embedUnmute = new RichEmbed()
                .setTitle("HYPE BOT - Mute System")
                .setColor(0x7FFF00)
                .addField("Success!", "User " + member.user.tag + " has been unmuted!")
                .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
                msg.channel.send(embedUnmute)
              } else {
                let f = msg.content.split(" ").slice(2).join(" ");
                member.removeRole(role.id);
                let embedDM = new RichEmbed()
                .setTitle("HYPE BOT - Information")
                .addField("We have good news!", "You have been unmuted on server "+ msg.guuld.name +" for" + f + " !")///f = powód
                member.send(embedDM)
                let embedZa = new RichEmbed()
                .setTitle("HYPE BOT - Mute System")
                .setColor(0x7FFF00)
                .addField("Success!", "User " + member.user.tag + " has been unmted for " + f + " !")
                .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
                msg.channel.send(embedZa)
              }
            } else {
              let embedNieMa = new RichEmbed()
              .setTitle("HYPE BOT - Mute System Error")
              .setColor(0xFF0000)
              .addField("This user isn't muted.", "Try unmute someone else.")
              .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
              msg.channel.send(embedNieMa)
            }
          } else {
            let embedNie = new RichEmbed()
            .setTitle("HYPE BOT - Mute System Error")
            .setColor(0xFF0000)
            .addField("You can't unmute users with a rank higher than yours.","try again")
            .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#402", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
            msg.channel.send(embedNie)
          }
        } else {
          let embedOznacz = new RichEmbed()
          .setTitle("HYPE BOT - Mute System Error")
          .setColor(0xFF0000)
          .addField("Probably you didn't pinged user you want to unmute.", "Please try again.")
          .setFooter("HYPE BOT by wojtess#0443 - Sasiad_janusz#8560 - Bin#4027", "https://s6.ifotos.pl/img/HYPE-BOT-_qsnnxxw.png")
          msg.channel.send(embedOznacz)
        }
        } else {
          msg.author.send("Created new role: " + mutedRoleName + "Which allows me to mute you. Don't ask. really. That role is below: " + msg.guild.members.get(client.user.id).highestRole.name);
          createMuteRole(msg);
        }
      } else if(cmd === prefix + "say") {
        msg.channel.send(msg.content.split(" ").slice(1).join(" "));
      }
    }
}
}


function czyZawiera(g,o) {
  for(var t = 1;t <= o.length + 1;t++) {
    g.includes(o[t]);
    return true;
  }
  return false;
}

async function nick() {
  while(true) {
   let n = name;
   let t = "";
   for(let i = 0;i <= n.length - 1;i++) {
     t = t + n[i];
     await sleep(2500); 
     client.guilds.get(Your_Server_Id).members.get(client.user.id).setNickname(t);
   }
  }
}


function tempban(who,guild,time) {
  who.ban();
  let id = who.id;
  setTimeout(() => {
    guild.unban(id);
  },time);
}

function tempmute(who,role,time) {
  who.addRole(role.id);
  setTimeout(() => {
    who.removeRole(role.id);
  },time);
}


function createMuteRole(msg) {
  try {
    msg.author.send("create new mute role! `" + mutedRoleName + "` on " + msg.guild.name);
    msg.guild.createRole({
      name:mutedRoleName,
      color:"GRAY",
      position:msg.guild.members.get(client.user.id).highestRole.position - 1,
      permissions:[1115136]
    });
    var channels = msg.guild.channels.array();
    let role = msg.guild.roles.find(m => m.name == mutedRoleName);
    for(var i = 0;i <= channels.length - 1;i++) {
      if(channels[i].type == "text") {
        channels[i].overwritePermissions(role,{ SEND_MESSAGES: false });
      } else if(channels[i].type == "voice") {
        channels[i].overwritePermissions(role,{ SPEAK: false });
      }
    }
  } catch(e) {
    console.log(e)
  }
}



function togglefunc(msg) {
  try{
  const args = msg.content.split(/ +/);
  const cmd = args.shift().toLowerCase();
  if(cmd === prefix + "toggle") {
        if(toggle == true) {
        toggle = false;
        let embed = new RichEmbed()
        .setTitle("HYPE BOT - Toggle System Notification.")
        .setColor(0xFF000)
        .addField("☑ Bot successfully turned off",misc.getTime());
        msg.channel.send(embed)
      }
       else {
         if(toggle == false) {
           toggle = true;
           let embed = new RichEmbed()
           .setTitle("HYPE BOT - Toggle System Notification.")
           .setColor(0xFF000)
           .addField("☑ Bot successfully turned on",misc.getTime());
           msg.channel.send(embed)
         }
       }
  }
  }catch(e) {
    console.log(e);
  }
}


async function words(msg) {
  if(toggle == true) {
  if (swearwords.some(word => msg.content.includes(word))) {
    if(msg.member.roles.has("570340449433419806cg")) {
      misc.log("It was administrator.")
    }
       else {
        msg.delete();
        let embed = new RichEmbed()
        .setTitle(":warning: Hey! I saw that!")
        .addField("Yes, **I** know it is embaressing that someone gives you **Warning**, however the language you used may in some way affect or disturb others.", "for now it is only warning, however if you will **NOT** stop we will be forced to kick/ban you.")
        msg.channel.send(embed);
        return;
       }
  }
}

}






process.on('unhandledRejection', (err, promise) => {
  console.log(err)
});