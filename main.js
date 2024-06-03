let parola = "cream"
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
input1.addEventListener("input", (e) => updateValue(e,input1));
input2.addEventListener("input", (e) => updateValue(e,input2));
input3.addEventListener("input", (e) => updateValue(e,input3));
input4.addEventListener("input", (e) => updateValue(e,input4));
input5.addEventListener("input", (e) => updateValue(e,input5));

function updateValue(event,input) {
    input.value = event.target.value.slice(-1);
}
function onClick() {
        let word = input1.value + input2.value + input3.value + input5.value + input5.value;
        console.log("word",word)
}