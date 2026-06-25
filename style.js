const messageBox = document.querySelector("#message-box");
const sendButton = document.querySelector("#send-button");
const messageListArea = document.querySelector("#messagelist-area");
function NewMessage() {

    if (messageBox.value.trim() === "") {
        return;
    }
    const MessageBubble = document.createElement("article");
    MessageBubble.className="message sent"

    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = messageBox.value.trim();

    const timeStamp = document.createElement("small");
    timeStamp.textContent = new Date().toLocaleTimeString()
    MessageBubble.appendChild(messageParagraph);
    MessageBubble.appendChild(timeStamp);
    messageListArea.appendChild(MessageBubble);
    messageBox.value = "";
    MessageBubble.scrollIntoView({
        behavior: "smooth"
    });
}
sendButton.addEventListener("click", NewMessage);
messageBox.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        NewMessage();
    }
});