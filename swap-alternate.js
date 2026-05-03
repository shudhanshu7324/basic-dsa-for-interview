const arr = [4,5,6,7,8,9,10];


function swapAlternate(arr){
    for(let i=0; i<arr.length-1; i+=2){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

console.log(swapAlternate(arr));