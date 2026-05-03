const arr1 = [1, 2, 3, 4,4,4, 5];
const arr2 = [4, 5, 6, 7, 8];

// function findIntersection(arr1, arr2) {
//     const intersection = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 intersection.push(arr1[i]);
//                 break;
//             }
//         }
//     }
//     return intersection;
// }

// console.log(findIntersection(arr1, arr2));

// function findIntersection(arr1,arr2){
//     const intersection = [];
//     for(let i=0;i<arr1.length;i++){
//         const num = arr2.find(element => element === arr1[i])
//         if(num !== undefined){
//             intersection.push(arr1[i]);
//         }
//     }
//     return intersection;
// }

// function findIntersection(arr1, arr2){
//     const set1 = new Set(arr2);
//     return arr1.filter(ele => set1.has(ele))
// }

function findIntersection(arr1, arr2){
    const set1 = new Set(arr2);
    return [... new Set(arr1.filter(ele => set1.has(ele)))]
}

console.log(findIntersection(arr1,arr2));