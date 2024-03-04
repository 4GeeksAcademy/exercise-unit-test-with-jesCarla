// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 146.26;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0055;
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYenToPound}

/*
// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(USD){
    return USD * oneEuroIs(JPY) ;
};
console.log(fromDollarToYen(1));

function fromEurotoDollar(EURO){
    return EURO * oneEuroIs(USD) ;
};
console.log(fromEurotoDollar(3.5));

function fromYenToPound(JPY){
    return JPY * oneEuroIs(GBP) ;
};
console.log(fromYenToPound(1));
*/