/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const hour = new Date().getHours() //comment this and add specific numbers if you want to try other condition
let helloMessage


// Dichiara la funzione qui.

function helloUserByHour (userName, hour) {

    if (hour <= 13 ){
        helloMessage = "buongiorno"
    } else if (hour <= 17) {
        helloMessage = "buonpomeriggio"
    } else {
        helloMessage = "buonasera"
    }

    return `${helloMessage} ${userName}`

} 

// Invoca la funzione qui e stampa il risultato in console


const messageToUser = helloUserByHour(name, hour)
console.log(messageToUser);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.




//arrow function 

/* const helloUserByHour = (userName, hour) => {

    if (hour <= 13 ){
        helloMessage = "buongiorno"
    } else if (hour <= 17) {
        helloMessage = "buonpomeriggio"
    } else {
        helloMessage = "buonasera"
    }

    return `${helloMessage} ${userName}`

}

const messageToUser = helloUserByHour(name, hour)
console.log(messageToUser);
 */


