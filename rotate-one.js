const arr =[55,34,245,567,4,25,35,64,7];

function rotateByOne(arr){
    const temp =arr[arr.length-1];
    let i = arr.length-1;
    while(i>0){
        arr[i] = arr[i-1];
        i--;
    }
    arr[0] = temp;

    return arr;
}

console.log(rotateByOne(arr))