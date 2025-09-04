const btn01 = document.getElementById("btnProcess");
btn01.addEventListener("click",printData);

const msg01 = document.getElementById("txt01");
const msg02 = document.getElementById("txt02");
const msg03 = document.getElementById("txt03");
const msg04 = document.getElementById("txt04");
const txtMessage = document.getElementById("txtS");





// Usa Number() si quieres asegurarte de que el valor sea solo un número válido.
function printData() {

  // creating the object
  const costumer = {
  name: msg01.value,
  age: msg02.value,
  city: msg03.value,
  gpa: msg04.value
  };

  let finalMessage = "********************* REPORT *********************\n";
  txtMessage.textContent = finalMessage;
  console.log(msg01.value);
  console.log(typeof(msg01.value));
  txtMessage.textContent += `Name: ${costumer.name}\nAge: ${costumer.age}\nCity: ${costumer.city}\nGPA: ${costumer.gpa} `;
  

}
