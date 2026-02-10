/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.
function firstLetterGrabber(firstletter) {
    const initials = []
    for(let i=0; i < firstletter.length; i++)
    {

        const initial = names[i]
        initials.push(initial[0])
        
        
    }

    return initials
}

// Invoca la funzione qui e stampa il risultato in console


const initialsArray = firstLetterGrabber(names)
console.log(initialsArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


//arrow function

/* const first_Letter_Grabber = firstletter => {

    const initials = []
    for(let i = 0; i<firstletter.length; i++)
    {

        const initial = names[i]
        initials.push(initial[0])
        
        
    }

return initials
}

const initialsArray = first_Letter_Grabber(names)
console.log(initialsArray) */


