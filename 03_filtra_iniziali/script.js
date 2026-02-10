/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const char = "A"

function searchForFirstChar(array, firstChar) {

    let charSearch = []

    for (let i = 0; i < array.length; i++){

        const firstLetter = array[i]

        if (firstLetter.charAt(0) === firstChar)

            charSearch.push(firstLetter)
        
    }

    return charSearch
}
 


// Invoca la funzione qui e stampa il risultato in console

 const result = searchForFirstChar (names, char)

console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


//arrow function

/* const searchForFirstChar = (array, firstchar) => {


    let charSearch = []

    for (let i = 0; i < array.length; i++){

        const firstLetter = array[i]

        if (firstLetter.charAt(0) === firstchar)

            charSearch.push(firstLetter)
        
    }

    return charSearch
}

const result = searchForFirstChar (names, char)

console.log(result); */

