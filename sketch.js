function setup() {
    noCanvas();

    let bot = new RiveScript()
    bot.loadFile("brain.rive", loading_done, loading_error);

    let button = select('#submit');
    let user_input = select('#user_input');
    let output = select('#output');

    button.mousePressed(chat);

    function chat() {
        let input = user_input.value();
        let reply = bot.reply("local-user", input);
        output.html('');
        showText('#output', reply, 0, 50);
    }

    function loading_done (batch_num) {
    	console.log("Batch #" + batch_num + " has finished loading!");

    	// Now the replies must be sorted!
    	bot.sortReplies();
    }

    // It's good to catch errors too!
    function loading_error (error) {
    	console.log("Error when loading files: " + error);
    }

    var showText = function (target, message, index, interval) {
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }
}


function draw(){

}
