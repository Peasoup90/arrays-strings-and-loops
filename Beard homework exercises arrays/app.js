//Breakfast array

let breakfast = ['sausage', 'bacon', 'beans', 'toast'];
console.log(breakfast);

//add last item
breakfast.push('hash brown');
console.log(breakfast);
//add first item
breakfast.unshift('orange juice');
console.log(breakfast);
//log the length of the array

function arrayLength(items){ //<< build from base with appropriate terms
    let leng = items.length //<< assign a variable to *function*.length
    return console.log(`The length of this array is ${leng}`) //<< log in template literal calling new variable
}
arrayLength(breakfast);//<< print count

// Last value

let array = ['red', 'blue', 'green', 'violet', 'yelllow'];

let lastValue = (array = null, n = null) => { //<<parameter for no elements in the array
    if (array == null) return void 0;         //defines array as null
    if (n === null) return array[array.length -1]; //<< if array is null(above) removes last value from null 
    return array.slice(Math.max(array.length - n, 0)); //<< slices out the last value from array - n???
}

let last = lastValue(array)
console.log(last);

// Arrays Music

let musicGenres = ['Rock', 'Rap']
musicGenres.push('Jazz');

//musicGenres.splice(Math.)  << got to here

console.log(musicGenres);

// alphabetical breakfast 

let arrbreakfast = breakfast.sort(function (a, b) { //<<assign variable to element sort. give function a,b uses ASCII greater/lesser 
    if (a < b) {
        return -1; //<< negative if less value (in number, on the string [a is less than b])
    }
    
    if (a > b){
        return 1;
    }
    return a.length - b.length; //<< returns the length of the array
})

console.log(arrbreakfast);
