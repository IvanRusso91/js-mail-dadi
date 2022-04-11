
/*1. Creazione della lista per l'accesso.
  2. Riconoscimento dell'utente tramite input.
  3. Eventuale alert per i non autorizati.
*/

//1. Creazione della lista per l'accesso.

const valid = ["mario@gmail.com",
  "francesca@hotmail.it",
  "franco@hotmial.com",
  "ivan@gmail.com"];

//2. Riconoscimento dell'utente tramite input.

const btnProsegui = document.getElementById("btn");
let avvertimento = false;

btnProsegui.addEventListener('click', function(){

  const utente =prompt("inserisci la tua Email");
  const btnHidden = document.querySelector('.btn-off');

  let emailPresente = false;

  for(let i = 0; i < valid.length; i++){
    if(valid[i] === utente){
      emailPresente = true;
      btnHidden.style.display = "block";  
    }
  }
 // 3. Eventuale alert per i non autorizati.

  if(!emailPresente){
    alert("Email non trovata");
  } 
})

//--------------------------------------------------

/*
1. Generare numero casuale da 1 a 6 per utente e pc
2. Decretare il vicitore
*/

const facceDado = 6;
const dadiUtente = document.getElementById('tira');
const risultato = document.querySelector("h4");

  //1. Generare numero casuale da 1 a 6 per utente e pc.

dadiUtente.addEventListener('click', function(){

  let random = Math.floor(Math.random() * (facceDado - 1)) + 1;

  
  let randomPc = Math.floor(Math.random() * (facceDado - 1)) + 1;

  // 2. Decretare il vicitore

  if(random > randomPc){
    alert("Complimentoni hai vinto");
    risultato.classList.add("vinto");

  }else if(random === randomPc){
    alert("pareggio")
    risultato.classList.add("pareggio");

  }else{
    alert("hai perso");
    risultato.classList.add("sconfitta");
  }

  document.getElementById('left').innerHTML = random;
  
  document.getElementById('right').innerHTML =  randomPc;
})  
