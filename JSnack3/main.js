/* 
Snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [
  { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
  { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
  { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
  { nome: "pinguino", famiglia: "Spheniscidae", classe: "uccelli" },
  { nome: "lucertola", famiglia: "lacertilia", classe: "rettili" },
  { nome: "lemure", famiglia: "primati", classe: "mammiferi" },
  { nome: "umano", famiglia: "ominidi", classe: "mammiferi" },
  { nome: "canguro", famiglia: "marsupiali ", classe: "mammiferi" },
  { nome: "rana", famiglia: "anura", classe: "anfibi" },
];

const mammals = animals.filter((animal) => {
  return animal.classe === "mammiferi";
});

console.log(mammals);
