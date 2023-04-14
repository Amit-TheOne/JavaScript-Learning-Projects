const countEl = document.getElementById("count-el");
const streakEl = document.getElementById("streak-el");

let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}


function save(){
    let countStr = count + " - ";
    streakEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}