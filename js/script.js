// // Dati due array di oggetti che rappresentano parti di una anagrafica di persone (nome, cognome, professione),
// //       crea un array che contenga tutti gli elementi di entrambi e fai un log di questo ultimo array.

// const employees = [
//     { nome: "Marco", cognome: "Rossi", professione: "Analyst", },
//     { nome: "Simona", cognome: "Invernizzi", professione: "Developer",},
//     { nome: "Madison", cognome: "Rolandi", professione: "Graphic",},
//     { nome: "Christian", cognome:"smiths", professione: "Graphic",},
//     { nome: "Emily", cognome:"Dickinson", professione: "Writer",},
// ];


//     const newEmployees = [
//         { nome: "Giovanni", cognome: "Verdi", professione: "Data Scientist" },
//         { nome: "Alessia", cognome: "Bianchi", professione: "UX Designer" },
//         { nome: "Luca", cognome: "Ferrari", professione: "Software Engineer" },
//         { nome: "Elena", cognome: "Russo", professione: "Artist" },
//         { nome: "Roberto", cognome: "Romano", professione: "Marketing Specialist" },
//     ];
    
    
// const anagraphic = [...employees, ...newEmployees ];
// console.log (anagraphic);

// // 2 Stampa in una lista in pagina l’anagrafica completa ottenuta nel precedente, provando ad usare destructuring e template literal.

// const {nome, cognome, professione} = anagraphic;
// console.log (nome, cognome, professione);

//

// Questa sotto no...

// const anagraficaList = document.getElementById("anagrafica-list");

// anagraphic.forEach(({ nome, cognome, professione }) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${nome} ${cognome} - ${professione}`;
//     anagraficaList.appendChild(listItem);
// });

//

// 3 Crea una funzione che accetti un numero indefinito di numeri e ne ritorni la somma.

let number = [];

// console.log(number);

// devo assegnare a numberArchive il valore inserito nel prompt ogni volta che viene inserito un nuovo numero 

const numberArchive = number[i];

number.forEach(element => {
    [parseInt(prompt("inserisci un numero"))];
    num

});

console.log(numberArchive);



