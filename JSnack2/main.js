/* 
Snack 2:
A partire da un array di stringhe, crea un secondo array formattando 
le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
 */

const ninjas = ["NARUTO", "nEJi", "inO", "JiraYa", "kakaSHI"];
const readableNinjas = ninjas.map((ninja) => {
  //console.log(ninja);
  const toLowerCaseNinjaArray = ninja.toLowerCase().split("");
  const newZero = toLowerCaseNinjaArray[0].toUpperCase();
  toLowerCaseNinjaArray.shift();
  toLowerCaseNinjaArray.unshift(newZero);
  return (readableNinja = toLowerCaseNinjaArray.join(""));
  // console.log(readableNinja);
});

const colors = ["red", "yellow", "green", "blue", "orange", "grey"];
console.log(readableNinjas);
console.log(window);
window.color = colors;

console.log(window.colors);
