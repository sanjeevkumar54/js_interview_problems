let arr = [0,10,0,20,50,5,0,0,8];
let z = 0
let nz = 0;
let temp;
while(arr.length > nz ){
    if(arr[nz] !== 0 )
    {
        temp = arr[nz]; 
        arr[nz] = arr[z];
        arr[z] = temp;
        z++
        nz++
    }
    else
    {
      nz++
    }
}
console.log(arr)
//solution with for loop

function moveZeroToEndStable(arr) {
    let nz = 0; // index to place next non-zero
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nz], arr[i]] = [arr[i], arr[nz]]; // swap
            nz++;
        }
    }
    return arr;
}

console.log(moveZeroToEndStable([0,0,1,2,3])); // [1,2,3,0,0]
