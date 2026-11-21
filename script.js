const char_name = "Pere / Susie Yang:";
const chats = [
    "Welcome to Pere Merchant Shop! Take a look at all the goodies.",
    "Hopefully you are having a good time taking a tour around here.",
    "Do you know all the easter eggs in this website? If not, explore the place a little!",
    "You do know that clicking the chat repeatedly only bring you back to old chats right?",
    "You are quite a determined one, I'd say."
];
const chat_btn = document.getElementById("chat-button");
const chat = document.getElementById("chat");
let chat_index = 0;

chat_btn.addEventListener("click", iterate_chat);
chat.innerHTML = chats[0];

const images = [
    
]

function iterate_chat() {
    if (chat_index == chats.length - 1) {
        chat_index = 0;
    } else {
        chat_index++;
    }
    // chat_index %= chats.length;
    chat.innerHTML = chats[chat_index];
}