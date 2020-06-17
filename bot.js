const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const fs = require('fs');
const configFile = require('./config.json');

//instantiate
const bot = new Client();
const PREFIX = '--';

// Print a message in the console confirming the bot is online
bot.on('ready', () => {
	console.log(bot.user.tag, ' is online');
});

// COMMAND pong back
bot.on('message', msg => {
	let args = msg.content.substring(PREFIX.length).split('  ');
	
		switch(args[0]) {
			case 'ping':
				msg.channel.send('pong');
			break;
			case 'website':
				msg.channel.send('github.com/gittingcomputey');
			break;
			case 'info':
			const infoembed = new MessageEmbed()
      .setTitle('moistBot')
      .setColor('#262626')
      .setDescription('Hello, humans. I am Matteo\'s bot. My name is moistBot, and I was created by gettingComputey');
    	msg.channel.send(infoembed);
			break;
		}
});

// Say hello when someone says hi! or hello!
bot.on('message', msg => {
	if (msg.content === 'hi Matteo!' || msg.content === 'hello!') {
		msg.reply('hello! A moist hello.');
	}
 });

// Show avatar
bot.on('message', msg => {
	if (msg.content === 'show avatar') {
    // Send the user's avatar URL
    msg.reply(msg.author.displayAvatarURL());
  }
});

// Get gud
bot.on('message', msg => {
	if (msg.content === 'gg') {
    // Say a nice thing
    msg.channel.send('Good job everyone!');
  }
});


// Get gud
bot.on('message', msg => {
        if (msg.content === 'gw') {
    // Say a nice thing
    msg.channel.send('Super moist!');
  }
});

// Embedded message
bot.on('message', msg => {
  if (msg.content === 'embed') {
    
		// Info about justiceScratch message embed  
    const infoembed = new MessageEmbed()
      .setTitle('MaximumMoist')
      .setColor('#2e76cf')
      .setDescription('Moist to the maximum');
    	msg.channel.send(infoembed);
  }
});


//attachment
bot.on('message', message => {
	
  if (message.content === 'michael-annoyed') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('./images/the_office/michael/michael-annoyed.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});


bot.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  if (message.content.startsWith('kick this mofo')) {
    // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't say who to kick");
    }
  }
});



//login
bot.login(configFile.token);
