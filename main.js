/**
 * Created by Ian Montgomery (IJMontomery7)
 *
 * This simple discord bot allows a user to set messages the bot will reply to
 */


var Discord = require("discord.js");


var bot = new Discord.Client(); // setup required for discord.js

var dictionary = {};

bot.on("message", function (message) {
    var parsedLine = message.content.split(" ");

    if (parsedLine[0] == ":set"){
        if (parsedLine.length < 4 ){
            message.reply("correct format is: :set message -> reply"); // tells how to use the :set command
        }
        else {
            var first = parsedLine[1];
            var second = "";
            var x = 2;
            var mark = 0;
            while (x < parsedLine.length) {
                if (parsedLine[x] != "->" && mark == 0) { // words before -> will be put in first
                    first = first.concat(" ");
                    first = first.concat(parsedLine[x]);
                }
                if (parsedLine[x] != "->" && mark == 1) { // words after -> will be put in second
                    second = second.concat(" ");
                    second = second.concat(parsedLine[x]);
                }
                else {
                    mark = 1;
                }
                x++;
            }


            dictionary[first] = second; // sets the commands into the dictionary
        }
    }
    if(message == ":clear"){
        dictionary = {};
    }
    else { // goes through the list of keys, if the message is the key the bot will respond with the value
        for (var key in dictionary) {
            var value = dictionary[key];
            if (message.content == key) {
                message.reply(value);
            }
        }
    }


});



// Discord.js' way to log the bot on
bot.login("MjQ2MTQ1MDc3NzQ1OTQyNTMw.CwWX_w.OxCsOdREUf0V9YfPqEOVfLC4QnQ");