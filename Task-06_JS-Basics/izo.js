console.log("6.5) Изограммы");

function isIsogram(sWord)
 {
  for (iCharIndex = 0; iCharIndex < sWord.length; iCharIndex++)
    if (sWord.substring(iCharIndex + 1).includes(sWord.charAt(iCharIndex)))
      return false;
  return true;
 }

console.log("Dermatoglyphics");
console.log("aba");
console.log("moOse");
console.log("");