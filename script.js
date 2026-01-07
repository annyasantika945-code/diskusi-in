function login() {
  const user = document.getElementById("username").value;
  if(user.trim() === "") {
    alert("Username wajib diisi");
    return;
  }
  localStorage.setItem("username", user);
  window.location.href = "chat.html";
}