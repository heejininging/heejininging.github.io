const start = document.querySelector(".gamestart");
const startbtn = document.querySelector(".gamestart > button");
const playground = document.querySelector(".playground > ul");

startbtn.onclick = function () {
    start.style.display = "none";
    gamemode();
}

function gamemode() {
    for (let i = 0; i < 10; i++) {
        var li = document.createElement("li");
        var ul = document.createElement("ul");
        for (let j = 0; j < 18; j++) {
            var block = document.createElement("li");
            ul.prepend(block);
            var x = document.createElement("IMG");
            x.setAttribute("src", "../img/apple2.png");
            x.setAttribute("width", "40");
            x.setAttribute("height", "40");
            block.prepend(x);
            var text = Math.floor(Math.random() * 9)+1;
            block.prepend(text);
            x.style.textAlign = "center";
            
        }
        li.prepend(ul);
        playground.prepend(li);
    }
}
