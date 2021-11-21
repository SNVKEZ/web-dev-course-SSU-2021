console.log("6.1) Плоский массив");

let ArrSort = arr => arr
    .flat(Infinity)
    .sort((a, b) => a - b);

console.log(ArrSort([[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]]))
console.log(ArrSort([]))
console.log(ArrSort([[], []]))
console.log(ArrSort([[], [1]]))
console.log(ArrSort([[1, 3, 5], [-100], [2, 4, 6]]))