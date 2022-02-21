
let entries_counter = 0;
var audio = new Audio("../media/audio/message_sent.wav");

function CreateMessageContent(chatname, chatmessagetext, datetime) {
    entries_counter ++;
    var chatmessage = document.createElement("div");
    chatmessage.setAttribute("class","chatmessage");
    chatmessage.setAttribute("id","chatmessage" + entries_counter);

    // creating timestampbox
    var timestampbox = document.createElement("div");
    timestampbox.setAttribute("class","timestampbox");
    var img = document.createElement("img");
    img.src= "../media/icons/minus.svg";

    datetime = entries_counter + ". " + datetime.toDateString() + " "+ (datetime.toTimeString().substring(0,8));
    var timestamp = document.createElement("p");
    timestamp.innerHTML = datetime;
    timestamp.setAttribute("class","timestamp");
    img.setAttribute("class","messageicon");
    img.setAttribute("id","messageicon" + entries_counter);
    timestampbox.appendChild(img);
    timestampbox.appendChild(timestamp);
    
    // creating name with link
    var chatlogname = document.createElement("a"); 
    chatlogname.setAttribute("id","chatlogname" + entries_counter)
    chatlogname.innerHTML = chatname;
    chatlogname.href = "javascript:void(0);";

    // creating message content
    var chatlogmessage = document.createElement("p");
    chatlogmessage.setAttribute("id","chatlogmessage" + entries_counter);
    chatlogmessage.setAttribute("class","chatlogmessage");

    chatlogmessage.innerHTML = chatmessagetext;

    chatmessage.appendChild(timestampbox);
    chatmessage.appendChild(chatlogname);
    chatmessage.appendChild(chatlogmessage);
    return chatmessage;
}


function new_entry() {
    // get name and message from the form
    let name = document.querySelector("#chat_name").value;
    let message = document.querySelector("#chatmessage").value;
    
    // get now timestamp
    var now = new Date();

    // create new message html
    newmessage = CreateMessageContent(name, message, now);
    document.getElementById("chatlog").appendChild(newmessage);
    audio.play();
}

document.querySelector("#chatform").addEventListener('submit', send_message);
function send_message(event) {
    new_entry();
    event.preventDefault();
    document.getElementById("chatform").reset();
    if (entries_counter < 2) {return};
    document.getElementById("chatlog").style["display"] = "block"; 

    let icons = document.getElementsByClassName("messageicon");
    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", hide_message_content);
    }
}



function hide_message_content(event) {
    // event.target.style.height = "100px";
    if (event.target.src.match("minus.svg")) {
        event.target.src = "../media/icons/plus.svg";
        messagebox = event.target.parentElement.parentElement;
        messagebox.querySelector(".chatlogmessage").style.display= "none";
    }
    else {
        event.target.src="../media/icons/minus.svg";
        messagebox = event.target.parentElement.parentElement;
        messagebox.querySelector(".chatlogmessage").style.display= "block";
    }
}