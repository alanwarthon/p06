const btn01 = document.getElementById("btnProcess");
btn01.addEventListener("click",process02);

const msg01 = document.getElementById("txt01");
const msg02 = document.getElementById("txt02");
const txtMessage = document.getElementById("txtS");

// Usa Number() si quieres asegurarte de que el valor sea solo un número válido.
function process01() {
  
  let sum = Number(msg01.value) + Number(msg02.value);
  let finalMessage = `${msg01.value} + ${msg02.value} = ${sum}`;

  txtMessage.textContent += finalMessage + "\n";
  msg01.value = "";
  msg02.value = "";
  msg01.focus();

}

// Usa parseFloat() si quieres ser más permisivo y permitir entradas con texto mezclado.
function process02(){
  let sum = parseFloat(msg01.value) + parseFloat(msg02.value);
  let finalMessage = `${msg01.value} + ${msg02.value} = ${sum}`;

  txtMessage.textContent += finalMessage + "\n";
  msg01.value = "";
  msg02.value = "";
  msg01.focus();
}