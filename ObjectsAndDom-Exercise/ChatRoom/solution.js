function solve () {
    let message = document.querySelector("#chat_input");
    let buttonSend = document.querySelector("#send");
    
    buttonSend.addEventListener('click', functionSendMessage);

   function functionSendMessage() {
        let chatSection = document.getElementById("chat_messages");
        let createdDiv = document.createElement("div");
        createdDiv.className ="message my-message";
        createdDiv.innerHTML = message.value;
        chatSection.appendChild(createdDiv);
        message.value ="";
    }
}