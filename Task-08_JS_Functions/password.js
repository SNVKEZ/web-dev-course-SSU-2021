function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }



function genPass(len){

    var pass = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++){
        pass += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    return pass;
}
console.log("1) GenPass");
console.log(genPass(getRandomArbitrary(6,20)));
console.log("");