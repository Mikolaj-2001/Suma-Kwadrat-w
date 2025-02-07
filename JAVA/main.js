function sumaKwadratów() {
    var array = [0,1,2,3,4,5];

    let sumaKw = 0;

    array.forEach(element => {
        sumaKw += Math.pow(element,2)
    });
    
    return sumaKw;
}

console.log(sumaKwadratów())
