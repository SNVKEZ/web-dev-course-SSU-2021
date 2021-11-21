function gameOut(quantity, step) {
    let gamerList = new Array(quantity).fill().map((e, i) => i + 1)

    for (let i = 1; gamerList.length > 1; i++) {
        let current = gamerList.shift();
        !(i % step == 0)
            ? gamerList.push(current)
            : i = 0;
    }
    return gamerList.shift();
}

console.log("2) Game: ");
console.log(gameOut(7, 3));
console.log(gameOut(11, 19));
console.log(gameOut(1, 300));