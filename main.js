const natoka = document.querySelector(".natoka");
const btn = document.getElementById("btn");
btn.addEventListener("click",function () {
    this.remove();
    showInfo();
    natoka.style.display = "block";
})

function showInfo() {
    const con = document.createElement("div");
    con.className = "con";
    const text = document.createElement("p");
    text.className = "text";
    text.innerText = "I love You ";
    const heart = document.createElement("span");
    heart.className = "red";
    heart.innerText = "❤ 🙂";

    text.appendChild(heart);
    con.appendChild(text);
    document.body.appendChild(con);

};


const toggle = document.getElementById("switch");

document.body.classList.contains("dark-mode")? toggle.innerText = "Dark":toggle.innerText = "Light";
toggle.onclick = function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.contains("dark-mode")? toggle.innerText = "Dark":toggle.innerText = "Light";
}
