const arr = ['a','b','v','a','b','e','v'];

const ans = {}

for(let i=0;i<arr.length;i++){
    const char = arr[i];
    ans[char] = (ans[char] || 0) + 1;
}

console.log(ans)

