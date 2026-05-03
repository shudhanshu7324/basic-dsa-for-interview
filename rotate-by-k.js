const arr = [4,7,3,45,324,54645,3,32,5];
// k = 3
// i = 0,5 1,32 2,3
function rotateByK(arr,k){
    const temp =[];
    let count = 0;
    let j=arr.length - k;
    while(count!==k){
        temp.push(arr[j]);
        count++;
        j++;
    }
    let i = arr.length-1;
    j=arr.length - k-1;

    while(j>=0){
        arr[i] = arr[j];
        i--;
        j--;
    }

    console.log(temp)
    for(i=0;i<k;i++){
        arr[i] = temp[i];
    }

    return arr;
}

console.log(rotateByK(arr,3))