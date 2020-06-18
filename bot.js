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

// COMMANDS Ping, Website, Info
bot.on('message', msg => {
	let args = msg.content.substring(PREFIX.length).split('  ');
	
		switch(args[0]) {
			case 'ping':
				msg.channel.send('pong');
			break;
			case 'website':
				msg.channel.send('https://github.com/gittingcomputey/moistbot/blob/main/README.md');
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

// Get good
bot.on('message', msg => {
	if (msg.content === 'gg') {
    // Say a nice thing
    msg.channel.send('Good job everyone!');
  }
});


// Get great
bot.on('message', msg => {
        if (msg.content === 'gw') {
    // Say a nice thing
    msg.channel.send('Super moist!');
  }
});

// Embedded message
bot.on('message', msg => {
  if (msg.content === 'embed') {
		// Info about MaximumMoist server -  message embed
    const infoembed = new MessageEmbed()
      .setTitle('MaximumMoist')
      .setColor('#2e76cf')
      .setDescription('Moist to the maximum');
    	msg.channel.send(infoembed);
  }
});


// Pic Logic
bot.on('message', msg => {
	let args = msg.content.substring(PREFIX.length).split('  ');
	
		switch(args[0]) {
		// Michael Scott Pics
			case 'm.annoyed':
    		const mannoyed = new MessageAttachment('./images/the_office/michael/michael-annoyed.jpg');
    		msg.channel.send(mannoyed);
			break;
		case 'm.anothergo':
                const manothergo = new MessageAttachment('./images/the_office/michael/michael-anothergo.jpg');
                msg.channel.send(manothergo);
                        break;
		case 'm.burned':
                const mburned = new MessageAttachment('./images/the_office/michael/michael-burned.png');
                msg.channel.send(mburned);
                        break;
		case 'm.doingalcohol':
                const mdoingalcohol = new MessageAttachment('./images/the_office/michael/michael-doingalcohol.jpg');
                msg.channel.send(mdoingalcohol);
                        break;
		case 'm.grimace':
                const mgrimace = new MessageAttachment('./images/the_office/michael/michael-grimace.png');
                msg.channel.send(mgrimace);
                        break;
		case 'm.hangloose':
                const mhangloose = new MessageAttachment('./images/the_office/michael/michael-hangloose.jpg');
                msg.channel.send(mhangloose);
                        break;
		case 'm.noidea':
                const mnoidea = new MessageAttachment('./images/the_office/michael/michael-noidea.jpg');
                msg.channel.send(mnoidea);
                        break;
		case 'm.sheesh':
                const msheesh = new MessageAttachment('./images/the_office/michael/michael-sheesh.jpg');
                msg.channel.send(msheesh);
                        break;
		case 'm.shesaid':
                const mshesaid = new MessageAttachment('./images/the_office/michael/michael-shesaid.jpg');
                msg.channel.send(mshesaid);
                        break;
		case 'm.shocked':
                const mshocked = new MessageAttachment('./images/the_office/michael/michael-shocked.png');
                msg.channel.send(mshocked);
                        break;
		case 'm.sosad':
                const msosad = new MessageAttachment('./images/the_office/michael/michael-sosad.jpg');
                msg.channel.send(msosad);
                        break;
		case 'm.soclose':
                const msoclose = new MessageAttachment('./images/the_office/michael/michael-soclose.png');
                msg.channel.send(msoclose);
                        break;
		case 'm.truffled':
                const mtruffled = new MessageAttachment('./images/the_office/michael/michael-truffled.jpg');
                msg.channel.send(mtruffled);
                        break;
		case 'm.ohwell':
                const mohwell = new MessageAttachment('./images/the_office/michael/michael-ohwell.jpg');
                msg.channel.send(mohwell);
                        break;

		// Dwight Pics
		case 'd.beingjim':
                const dbeingjim = new MessageAttachment('./images/the_office/dwight/dwight-beingjim.png');
                msg.channel.send(dbeingjim);
                        break;
		case 'd.bloodalone':
                const dbloodalone = new MessageAttachment('./images/the_office/dwight/dwight-bloodalone.jpg');
                msg.channel.send(dbloodalone);
                        break;
		case 'd.christmas':
                const dchristmas = new MessageAttachment('./images/the_office/dwight/dwight-christmas.jpg');
                msg.channel.send(dchristmas);
                        break;
		case 'd.crybaby':
                const dcrybaby = new MessageAttachment('./images/the_office/dwight/dwight-crybaby.jpg');
                msg.channel.send(dcrybaby);
                        break;
		case 'd.facemask':
                const dfacemask = new MessageAttachment('./images/the_office/dwight/dwight-facemask.jpg');
                msg.channel.send(dfacemask);
                        break;
		case 'd.fakelaugh':
                const dfakelaugh = new MessageAttachment('./images/the_office/dwight/dwight-fakelaugh.jpg');
                msg.channel.send(dfakelaugh);
                        break;
		case 'd.knife':
                const dknife = new MessageAttachment('./images/the_office/dwight/dwight-knife.jpg');
                msg.channel.send(dknife);
                        break;
		case 'd.lookingblind':
                const dlookingblind = new MessageAttachment('./images/the_office/dwight/dwight-lookingblind.jpg');
                msg.channel.send(dlookingblind);
                        break;
		case 'd.malicious':
                const dmalicious = new MessageAttachment('./images/the_office/dwight/dwight-malicious.jpg');
                msg.channel.send(dmalicious);
                        break;
		case 'd.notimpressed':
                const dnotimpressed = new MessageAttachment('./images/the_office/dwight/dwight-notimpressed.jpg');
                msg.channel.send(dnotimpressed);
                        break;
		case 'd.ondesk':
                const dondesk = new MessageAttachment('./images/the_office/dwight/dwight-ondesk.png');
                msg.channel.send(dondesk);
                        break;
		case 'd.takingnotes':
                const dtakingnotes = new MessageAttachment('./images/the_office/dwight/dwight-takingnotes.jpg');
                msg.channel.send(dtakingnotes);
                        break;
		case 'd.wig':
                const dwig = new MessageAttachment('./images/the_office/dwight/dwight-wig.jpg');
                msg.channel.send(dwig);
                        break;

		// Jim Halpert Pics
		case 'j.asif':
                const jasif = new MessageAttachment('./images/the_office/jim/jim-asif.png');
                msg.channel.send(jasif);
                        break;
		case 'j.disbelief':
                const jdisbelief = new MessageAttachment('./images/the_office/jim/jim-disbelief.jpg');
                msg.channel.send(jdisbelief);
                        break;
		case 'j.happysurprised':
                const jhappysurprised = new MessageAttachment('./images/the_office/jim/jim-happysurprised.jpg');
                msg.channel.send(jhappysurprised);
                        break;
		case 'j.ooh':
                const jooh = new MessageAttachment('./images/the_office/jim/jim-ooh.jpg');
                msg.channel.send(jooh);
                        break;
		case 'j.terribleidea':
                const jterribleidea = new MessageAttachment('./images/the_office/jim/jim-terribleidea.png');
                msg.channel.send(jterribleidea);
                        break;
		case 'j.undeservedvictory':
                const jundeservedvictory = new MessageAttachment('./images/the_office/jim/jim-undeservedvictory.jpg');
                msg.channel.send(jundeservedvictory);
                        break;
		case 'j.watchingyou':
                const jwatchingyou = new MessageAttachment('./images/the_office/jim/jim-watchingyou.png');
                msg.channel.send(jwatchingyou);
                        break;
		case 'j.whathappened':
                const jwhathappened = new MessageAttachment('./images/the_office/jim/jim-whathappened.jpg');
                msg.channel.send(jwhathappened);
                        break;

		// The Office characters
		case 'a.andyairbass':
                const aandyairbass = new MessageAttachment('./images/the_office/all/office-andyairbass.jpg');
                msg.channel.send(aandyairbass);
                        break;
		case 'a.andygiddy':
                const aandygiddy = new MessageAttachment('./images/the_office/all/office-andygiddy.jpg');
                msg.channel.send(aandygiddy);
                        break;
		case 'a.andymean':
                const aandymean = new MessageAttachment('./images/the_office/all/office-andymean.jpg');
                msg.channel.send(aandymean);
                        break;
		case 'a.caught':
                const acaught = new MessageAttachment('./images/the_office/all/office-caught.jpg');
                msg.channel.send(acaught);
                        break;
		case 'a.creedshock':
                const acreedshock = new MessageAttachment('./images/the_office/all/office-creedshock.jpg');
                msg.channel.send(acreedshock);
                        break;
		case 'a.disabled':
                const adisabled = new MessageAttachment('./images/the_office/all/office-disabled.jpg');
                msg.channel.send(adisabled);
                        break;
		case 'a.nurseangela':
                const anurseangela = new MessageAttachment('./images/the_office/all/office-nurseangela.jpg');
                msg.channel.send(anurseangela);
                        break;
		case 'a.ok':
                const aok = new MessageAttachment('./images/the_office/all/office-ok.jpg');
                msg.channel.send(aok);
                        break;
		case 'a.onourway':
                const aonourway = new MessageAttachment('./images/the_office/all/office-onourway.jpg');
                msg.channel.send(aonourway);
                        break;
		case 'a.shoot':
                const ashoot = new MessageAttachment('./images/the_office/all/office-shoot.jpg');
                msg.channel.send(ashoot);
                        break;
		case 'a.stanleywin':
                const astanleywin = new MessageAttachment('./images/the_office/all/office-stanleywin.jpg');
                msg.channel.send(astanleywin);
                        break;
		case 'a.watching':
                const awatching = new MessageAttachment('./images/the_office/all/office-watching.png');
                msg.channel.send(awatching);
                        break;
		}
});

//login
bot.login(configFile.token);
