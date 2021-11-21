console.log("6.2) Бинарное слово");

let BinWord = (str) => str.split('')
    .map(s => s.charCodeAt().toString(2))
    .map(s => '0'.repeat(8 - s.length) + s);

console.log(BinWord('map'));
console.log(BinWord('AB'));
console.log(BinWord('wecking'));
console.log(BinWord('Ruby'));
console.log(BinWord('Yosemite'));