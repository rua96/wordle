let parola = ""; // Parola da indovinare

let wordInputArray = [
  [input1, input2, input3, input4, input5],
  [input6, input7, input8, input9, input10],
  [input11, input12, input13, input14, input15],
  [input16, input17, input18, input19, input20],
  [input21, input22, input23, input24, input25],
];

document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    if (event.target.previousElementSibling && !event.target.value)
      event.target.previousElementSibling.focus();
  }
});

function onInput(e) {
  if (/^[a-zA-Z]+$/.test(e.target.value)) {
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    }
    e.target.value = e.target.value.slice(-1); // Permette solo una lettera
  } else {
    e.target.value = ""; // Rimuove input non valido
  }
}

function onSubmit(e, wordIndex) {
  e.preventDefault();
  let word = wordInputArray[wordIndex];
  let guess = "";

  // Controllo: tutti i 5 campi devono essere pieni
  for (let i = 0; i < word.length; i++) {
    if (!word[i].value) {
      Toastify({
        text: "Inserisci tutte e 5 le lettere prima di inviare.",
        duration: 5000,
        gravity: "top",
        position: "center",
        backgroundColor:
          "linear-gradient(to right,rgb(95, 114, 255),rgb(29, 245, 194))",
        stopOnFocus: true,
      }).showToast();
      return; // Ferma l’esecuzione se ci sono campi vuoti
    }
    guess += word[i].value.toLowerCase(); // Costruisce la parola dell'utente
  }

  let allCorrect = true; // Flag per verificare se l'utente ha indovinato la parola

  // Controlla se la parola è corretta e cambia i colori
  for (let i = 0; i < word.length; i++) {
    if (guess[i] === parola[i]) {
      word[i].style.backgroundColor = "rgb(69, 222, 128)"; // Colore verde
    } else if (parola.includes(guess[i])) {
      word[i].style.backgroundColor = "rgb(219, 155, 81)"; // Colore giallo
    } else {
      word[i].style.backgroundColor = "rgb(166, 187, 188)"; // Colore grigio
    }
    word[i].disabled = true; // Disabilita il campo dopo l'invio

    // Se una lettera non è corretta, segna come non indovinata
    if (guess[i] !== parola[i]) {
      allCorrect = false;
    }
  }

  // Se la parola è stata indovinata, mostra un Toast di successo
  if (allCorrect) {
    Toastify({
      text: "Congratulazioni! Hai indovinato la parola!",
      duration: 5000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #56ab2f, #a8e063)", // Colore verde di successo
      stopOnFocus: true,
    }).showToast();
  } else {
    Toastify({
      text: "Non hai indovinato la parola!",
      duration: 5000,
      gravity: "top",
      position: "center",
      backgroundColor:
        "linear-gradient(to right,rgb(104, 26, 26),rgb(122, 95, 90))", // Colore verde di successo
      stopOnFocus: true,
    }).showToast();
  }

  // Passa alla riga successiva se esiste
  let nextLine = wordInputArray[wordIndex + 1];
  if (nextLine) {
    for (let i = 0; i < nextLine.length; i++) {
      nextLine[i].disabled = false;
    }
    nextLine[0].focus(); // Focus sul primo campo della riga successiva
  }
}

window.onload = () => {
  wordInputArray[0][0].focus(); // Focalizza il primo campo al caricamento
};

fetch("words.json")
  .then((response) => response.json())
  .then((data) => {
    // Estrai una parola casuale e la formatta correttamente
    parola = data[Math.floor(Math.random() * data.length)].toLowerCase().trim();
    console.log("Parola da indovinare:", parola); // Per debug
  });
