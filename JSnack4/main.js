/* 
Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
 */

const people = [
  {
    name: "Marco",
    surname: "Bianchi",
    age: 15,
  },
  {
    name: "Giovanni",
    surname: "Rossi",
    age: 19,
  },
  {
    name: "Claudia",
    surname: "Ratti",
    age: 28,
  },
  {
    name: "Giulio",
    surname: "Morettini",
    age: 57,
  },
  {
    name: "Luca",
    surname: "Izzo",
    age: 74,
  },
  {
    name: "Maria",
    surname: "Bonfanti",
    age: 82,
  },
];

const drivingLicense = people.map((person) => {
  if (person.age < 18) {
    return `${person.surname} ${person.name} non può richiedere la patente di guida, è minorenne`;
  } else if (person.age >= 18 && person.age < 50) {
    // fino a 50 anni si rinnova ogni 10 anni
    return `${person.surname} ${person.name} deve rinnovare la patente ogni 10 anni, in quanto under50`;
  } else if (person.age >= 50 && person.age < 70) {
    // tra 50 e 70 ogni 5 anni
    return `${person.surname} ${person.name} deve rinnovare la patente ogni 5 anni, in quanto over50 e under70`;
  } else if (person.age >= 70 && person.age < 80) {
    // tra 70 e 80 ogni 3 anni
    return `${person.surname} ${person.name} deve rinnovare la patente ogni 3 anni, in quanto over70 e under80`;
  } else if (person.age >= 80) {
    // dopo gli 80 ogni 2 anni
    return `${person.surname} ${person.name} deve rinnovare la patente ogni 2 anni, in quanto over80`;
  }
});
console.log(drivingLicense);
