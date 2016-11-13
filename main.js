/**
 * Created by Ian on 11/10/2016.
 */


var Discord = require("discord.js");


var bot = new Discord.Client();

var dictionary = {};

bot.on("message", function (message) {
    var parsedLine = message.content.split(" ");

    if (parsedLine[0] == ":set"){
        if (parsedLine.length < 4 ){
            message.reply("correct format is: :set message -> reply");
        }
        else {
            var first = parsedLine[1];
            var second = "";
            var x = 2;
            var mark = 0;
            while (x < parsedLine.length) {
                if (parsedLine[x] != "->" && mark == 0) {
                    first = first.concat(" ");
                    first = first.concat(parsedLine[x]);
                }
                if (parsedLine[x] != "->" && mark == 1) {
                    second = second.concat(" ");
                    second = second.concat(parsedLine[x]);
                }
                else {
                    mark = 1;
                }
                x++;
            }


            dictionary[first] = second;
        }
    }
    if(message == ":clear"){
        dictionary = {};
    }
    else {
        for (var key in dictionary) {
            var value = dictionary[key];
            if (message.content == key) {
                message.reply(value);
            }
        }
    }


});




bot.login("MjQ2MTQ1MDc3NzQ1OTQyNTMw.CwWX_w.OxCsOdREUf0V9YfPqEOVfLC4QnQ");