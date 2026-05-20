var x = 5
if (x > 5) {
    console.log("x is greater than 5");
} else if (x<5){
    console.log("x is less than 5");
} else  {
    console.log("x is equal to 5"); 'x is equal'
}
for (let i = 0; i< 10; i ++) {
    if (i % 2 === 0) {
    console.log(i); 0,2,4,6,8
};
}
for (let i = 0; i< 10; i ++) {
console.log(i); 0,2,4,6,8}

for (let i = 1; i<10; i += 2) {
    console.log (i); 1,3,5,7,9
};
var y = 0;
while (y < 10) {
    console.log(y); 0,1,2,3,4,5,6,7,8,9
    y++;
};

//CONTINUAÇÃO AULA 14:

var issoEumastring = "isso é uma string";
let issoEumnumero = 42;
const issoEumBooleano = true;
let issotambemEumaString = "42";

if (issoEumastring === issotambemEumaString){
    console.log("As strings são iguais");
} else {
    console.log("As strings são diferentes");
}

console.log (issoEumnumero + issotambemEumaString)
 
console.log (issoEumnumero + issoEumnumero)

var issoEumaGlobal = "Eu sou uma variável Global";

{
    let issoEumaLocal = "Eu sou uma variável Local";
    console.log(issoEumaGlobal);
    console.log(issoEumaLocal);
}
console.log(issoEumaGlobal);
//console.log(issoEumaLocal); isso causará um erro, pois IssoEumaLocal não está definido fora do bloco

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

console.log(sum.toPrecision(2));

for (let i = 0; i < 5; i++){
    console.log (i);
    console.log(i*2);
    console.log(i*2+1)
}

//imprimindo impares com while
let j = 0;
while (j < 5){
    console.log(j*2+1);
    j++;
}

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(16));
console.log(Math.pow(2,3));
console.log(Math.random());
console.log(Math.cos(90));

//Gerando os numeros primos entre 1 e 100
function isPrime(num){
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0 ) return false;
    }
    return true;
}

for (let i = 1; i <= 100; i++){
    isPrime ? console.log(i) : null
}






