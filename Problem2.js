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
if(chechArr(arr) !== false)
{
    let Grp1 = 0;
    let Grp2 = 0;
    for(let i = 0;i< arr.length;i++)
    {
        if(i%2 == 0)
        {
            Grp1 += Number(arr[i]);
        }
        else{
            Grp2 += Number(arr[i]);
        }
    }
    alert(Grp1+ " , "+ Grp2)
}