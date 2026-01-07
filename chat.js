const username = localStorage.getItem("username");
if(!username) window.location.href = "index.html";

const chatBox = document.getElementById("chatBox");
const typing = document.getElementById("typing");

let messages = JSON.parse(localStorage.getItem("messages")) || [];

function renderMessages() {
  chatBox.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message");
    div.classList.add(msg.user === username ? "right" : "left");
    div.innerHTML = `<b>${msg.user}</b><br>${msg.text}`;
    chatBox.appendChild(div);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

renderMessages();

function sendMessage() {
  const input = document.getElementById("message");
  if(input.value.trim() === "") return;

  messages.push({ user: username, text: input.value });
  localStorage.setItem("messages", JSON.stringify(messages));
  input.value = "";
  renderMessages();
}

function logout() {
  localStorage.removeItem("username");
  window.location.href = "index.html";
}

document.getElementById("message").addEventListener("input", () => {
  typing.innerText = "Sedang mengetik...";
  setTimeout(()=> typing.innerText="",1000);
});

window.addEventListener("storage", renderMessages);