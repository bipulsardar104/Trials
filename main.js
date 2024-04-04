function num(a) {
    let arr = [];
    arr.push(a);
    let b = a;
    do {
        b = Math.floor(b / 2);
        if (b >= 1) {
            arr.push(b);
        }
    } while (b !== 1);
    return arr;
}

function binary(a){
    const d = num(a);
    let b = []
    for(let a = d.length-1; a>=0; a--){
        b.push(d[a]%2)
    }
    return b.join("")
};
console.log(binary(73))
