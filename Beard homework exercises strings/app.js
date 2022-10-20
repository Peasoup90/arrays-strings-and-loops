/**let string = "apple"

function addFullStop() {
    if(string.charAt(string.length-1) != "."){
        string = string+".";
    }
}

console.log(string)*/

let capitalize = str => {
    if (typeof str === 'string') {
        return str.replace(/^\w/, c => c.toUpperCase())
    } 
    else {
        return 'This is not a string'
    }    
}

capitalize('doggo')