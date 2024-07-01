const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

//create a chat 

const createChatLi = (message, className) => {
    //create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span> <p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}


//handle chat messages
const handleChat = () => {
    userMessage =  chatInput.value.trim();
    if(!userMessage) return;

    //append user message to the chatbox

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
}

sendChatbtn.addEventListener("click", handleChat);
