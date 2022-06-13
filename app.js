/*
    1. Make a bot in discord developer tools
    2. assign that in your server
    3. run command npm init
    4. Take token and invite link from discord developer tools
    link: https://discord.com/api/oauth2/authorize?client_id=985607679848370176&permissions=2048&scope=bot
    token: OTg1NjA3Njc5ODQ4MzcwMTc2.Gh2V6r.s1HpblEE4l9wxxxCAoW4ZH5R8T5wgyFFyB7YNE
*/

const Discord= require('discord.js'); // This variable is to acces the discord api

// Creating a new client from discord api using intents and partials

const Client=new Discord.Client({intents:["GUILDS","DIRECT_MESSAGES","GUILD_MESSAGES"], 
            partials: ["CHANNEL","GUILD_MEMBER","MESSAGE","REACTION","USER"]});

// print bot name when ready event is fired 

Client.on("ready",()=>{
    console.log(Client.user.tag + " is online")
});

// messagecreate event it replies to user if user is not a bot and types Hello!

Client.on("messageCreate",(message)=>{
    if(message.author.bot==false && message.content=="Hello!"){
        message.reply("Hi this is hitesh ka bot");
        console.log(message);
    }
});

// login your bot with this password and command

Client.login('OTg1NjA3Njc5ODQ4MzcwMTc2.Gh2V6r.s1HpblEE4l9wxxxCAoW4ZH5R8T5wgyFFyB7YNE');