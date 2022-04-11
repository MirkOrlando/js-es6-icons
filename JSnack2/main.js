/* 
Snack 2:
A partire da un array di stringhe, crea un secondo array formattando 
le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
 */

const ninjas = ["NARUTO", "nEJi", "inO", "JiraYa", "kakaSHI"];
const readableNinjas = [];

ninjas.forEach((ninja) => {
  //console.log(ninja);
  const toLowercaseNinjaArray = ninja.toLowerCase().split("");
  const newZero = toLowercaseNinjaArray[0].toUpperCase();
  toLowercaseNinjaArray.shift();
  toLowercaseNinjaArray.unshift(newZero);
  const readableNinja = toLowercaseNinjaArray.join("");
  // console.log(readableNinja);
  readableNinjas.push(readableNinja);
});

console.log(readableNinjas);
