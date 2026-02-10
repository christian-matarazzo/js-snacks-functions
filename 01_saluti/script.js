/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function helloUser(name) {
    return `Ciao ${name}`
}

// Invoca la funzione qui e stampa il risultato in console


const helloMessage = helloUser(userName)
console.log(helloMessage);

//Risultato atteso se si passa 'Mario': // ciao Mario


// Arrow function 

const hello_user = user_name => `Ciao ${user_name}`

console.log(hello_user(userName));
