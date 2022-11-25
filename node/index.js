const e = require('prompt-sync')();
var n1 = Number(e("Digite nota 1: "));
var n2 = Number(e("Digite nota 2: "));
var proxn = 21 - (n1 + n2);
var resut = (proxn<=10)?'Ainda poderá passar com nota: ':'Reprovado, nota necessaria: '; 
console.log(resut + proxn);
