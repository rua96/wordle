let parola = "right"
let wordInputArray = [
    [input1,input2,input3,input4,input5],
    [input6,input7,input8,input9,input10],
    [input11,input12,input13,input14,input15],
    [input16,input17,input18,input19,input20],
    [input21,input22,input23,input24,input25]
]
function onInput(e) {
    e.target.value = e.target.value.slice(-1);
}
function onSubmit(e,wordIndex) {
    e.preventDefault();
    console.log("onSìsubmit")
        let word = wordInputArray[wordIndex];
        for(let i=0; i< word.length; i++) {
            if(word[i].value==parola[i])
            {
                word[i].style.backgroundColor = "green"
            } 
            else if(parola.includes(word[i].value))
            {           
                word[i].style.backgroundColor = "orange"                                            
            }
            else
            {
                 word[i].style.backgroundColor = "grey"}
            }
}
