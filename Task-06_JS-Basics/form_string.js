console.log("6.4) Форматирование строки");

let FormtString = (str) => str.split('')
    .reduce((previous, current, i) => previous + current.toUpperCase() + current.toLowerCase().repeat(i) + '-', '')
    .slice(0, -1);

console.log(FormtString('abcd'));
console.log(FormtString('RqaEzty'));
console.log(FormtString('cwAt'));