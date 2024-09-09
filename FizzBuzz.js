
const numAleatorio = () => Math.floor(Math.random() * 101);

let numRand = numAleatorio();

console.log(numRand);

if (numRand % 3 == 0 ) console.log("Fizz");
else if (numRand % 5 == 0 && !(numRand % 3 == 0) ) console.log("Buzz");
else if (numRand % 5 == 0 && numRand % 3 == 0 ) console.log("FizzBuzz");
else if (!(numRand % 5 == 0) && !(numRand % 3 == 0)) console.log("No es divisible por 3 ni por 5");