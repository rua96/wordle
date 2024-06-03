function onClick(){
let parola="apple";
let input = document.getElementById("input").value;
if (parola===input){
    myColor="green";}
else{
    myColor="red";
}
document.body.style.backgroundColor=myColor;
console.log("Input Value", input);
};
