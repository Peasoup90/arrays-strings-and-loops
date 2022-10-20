

for(let idx = 0; idx <= 10; idx++) { //<< initialisation, function ,increment
    console.log(idx)
}

for(let idx1 = 10; idx1 >= 0; idx1--) { //<< initialisation, function ,increment
    console.log(idx1)
}


/*
let tasks = ['cooking', 'cleaning', 'washing'];

for(i = 0; i = String; i++){
    console.log(`Task ${I+1}: ${tasks[i]}`)
}*/

//STUCK^^^^^^^

//let i = 3;
//while (i) {
  //  alert( i-- );
//}

//answer >> 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

for(idx2 = 0; idx2 <= 10; idx2++){
    if (idx2 % 2>0) {
    console.log(idx2 + " ");
    }
}   
// can only get odd have tried to solve but cannot find the issue

/*let x = 0;
while (x <= 3) {
    alert(`number ${x}`);
    x++
}*/

let numbers = [10, 20, 30, 40, 50]
let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    }
    console.log(sum)