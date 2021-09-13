let arr;
do {
    arr = prompt("Input!").split(",");
    if (arr.length < 2) {
        alert("Array must have more than 1 numbers!")
    }
} while (arr.length < 2);

let chechArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        
            if (isNaN(Number(arr[i]))) 
                return false;
         
    }
}

if (chechArr(arr) !== false) {
    let Max = 0;
    for (let z = 0; z < arr.length; z++) {
        let x = z + 1;
        let multiply = arr[z] * arr[x];
        if (Max < multiply) {
            Max = multiply;
        }
    }
    alert("Result is " + Max);
}
else {
    alert("Invalid input!");
}

