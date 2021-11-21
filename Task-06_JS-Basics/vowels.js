console.log("6.3) Подсчёт гласных");

function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }

console.log(getVowels('abracadabra'));
console.log(getVowels('ABRACADABRA'));
console.log(getVowels('o a kak ushakov lil vo kashu kakao'));
console.log(getVowels('my pyx'));