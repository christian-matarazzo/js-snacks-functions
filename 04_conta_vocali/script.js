/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocals = ["a", "e" ,"i", "o", "u", "A", "E", "I", "O", "U"]

// Dichiara la funzione qui.

function checkVocalsInWord (word, vocals) {

    let vocalFound = []
    
    for(let i = 0; i < word.length ; i ++){
       const char = word[i]
        if (vocals.includes(char)) {
            vocalFound.push(char);
        }
    }
    return vocalFound
}





// Invoca la funzione qui e stampa il risultato in console


const vocalResult = checkVocalsInWord (word, vocals)
console.log(vocalResult);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//arrow function

/* const checkVocalsInWord = (word, vocals) => {
        let vocalFound = []
    
    for(let i = 0; i < word.length ; i ++){
       const char = word[i]
        if (vocals.includes(char)) {
            vocalFound.push(char);
        }
    }
    return 

    return vocalFound

}

const vocalResult = checkVocalsInWord (word, vocals)
console.log(vocalResult);
 */