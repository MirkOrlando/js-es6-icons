/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: 
marca, modello e alimentazione ("benzina", "diesel", "gpl", "elettrico", "metano").
Dividi le automobili in 3 array separati: 
nel primo array solo le auto a "benzina", nel secondo solo le auto a "diesel", nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
 */

const cars = [
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Benzina",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Benzina",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Benzina",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Diesel",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Diesel",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Gpl",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Elettrico",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Elettrico",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Elettrico",
  },
  {
    brand: "Fiat",
    model: "Panda",
    powerSupply: "Metano",
  },
];

/* cars.forEach((car, i) => {
  console.log(`${i}: ${car.powerSupply}`);
});
 */
/* const benzina = cars.filter((car) => {
  return car.powerSupply === "benzina";
});

console.log(benzina);
 */

// verificare il tipo di alimentazione
// creare il nuovo array
const benzina = cars.filter((car) => {
  return car.powerSupply === "Benzina";
});

const diesel = cars.filter((car) => {
  return car.powerSupply === "Diesel";
});

const allOthers = cars.filter((car) => {
  return car.powerSupply !== "Benzina" && car.powerSupply !== "Diesel";
});

// stampare i 3 array

console.log(benzina);
console.log(diesel);
console.log(allOthers);
