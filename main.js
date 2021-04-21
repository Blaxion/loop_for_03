// // Exo 1
// let multiplicateur = 5;

// for (let i = 0; i <= 9; i++) {
//     console.log(multiplicateur+" x "+i+" = "+ i*multiplicateur )
// }

// // Exo 2
// let multiplicateur = 5;

// for (let i = 0; i <= 9; i+=2) {
//     console.log(multiplicateur+" x "+i+" = "+ i*multiplicateur )
// }

// // Exo 3
// for (let i = 0; i <= 20; i+=2) {
//     console.log(20 - i)
// }

// // Exo 4
// let tab = ["Farhad","Yassin","Alexis","Kevin","Junior","Andy","Tania","Issam","Mohammed", "Mihai", "Loic", "Charles", "William","Oussama","Ilyas","Anthony","Dorian","Alain","Cactus"];
// let longPrenoms = [];
// tab.forEach(e => {
//     if (e.length > 5) {
//         longPrenoms.push(e)
//     }
// });
// console.log(longPrenoms)

// //  Exo 5
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grossesSommes = [];
// for (let i = 0; i < sommes.length; i++) {
//     const e = sommes[i];
//     if (e > 60) {
//         grossesSommes.push(e)
//         sommes.splice(sommes.indexOf(e),1)
//         i--
//     }
// }   
// console.log(sommes)
// console.log(grossesSommes)

// Exo 6
// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// for (let i = 0; i < donnees.length; i++) {
//     const e = donnees[i];
//     switch (typeof e) {
//         case "string":
//             typeString.push(e)
//             donnees.splice(donnees.indexOf(e),1)
//             i--
//             break;
//         case "object":
//             typeNumber.push(e)
//             donnees.splice(donnees.indexOf(e),1)
//             i--
//             break;
//         case "number":
//             typeObject.push(e)
//             donnees.splice(donnees.indexOf(e),1)
//             i--
//             break;
//         default:
//             typeAutre.push(e)
//             donnees.splice(donnees.indexOf(e),1)
//             i--
//             break;
//     }
// }  
// console.log(typeString)
// console.log(typeNumber)
// console.log(typeObject)
// console.log(typeAutre)