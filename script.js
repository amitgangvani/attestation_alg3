
class Message {

    author;
    body;
    time;

    constructor(author, body){
        this.author = author;
        this.time = gettime();
        this.body = body;
    }

    show(){
        console.log(`${this.time} ${this.author}: ${this.body}`);
    }

}

class Messenger{

    messages = [];

    send(author, text){
        this.messages.push(new Message(author, text));
    }

    show_history(){
        this.messages.forEach(message => {
            message.show();
        });
    }

}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}


let messenger = new Messenger();
messenger.send('Артем', 'Первое сообщение');
messenger.send('Мария', 'Второе сообщение');
messenger.show_history();