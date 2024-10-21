const score =400
console.log(score)
const balance=new Number(100)
console.log(balance)
console.log(typeof balance)
console.log(balance.toString());
console.log(balance.toFixed(2));
const othernumber=23.8966
console.log(othernumber.toPrecision(3));
const numm= 123.886
console.log(numm.toPrecision(3))
const letnum= 1223.767
console.log(letnum.toPrecision(3))
const hundreds=1000000
console.log(hundreds.toLocaleString())            //American standard
console.log(hundreds.toLocaleString('en-IN'))    //Indian standard


//    maths 

console.log(Math);
console.log(Math.abs(-7))
console.log(Math.round(4.3))
console.log(Math.ceil(5.2))
console.log(Math.floor(3.8))
//console.log(Math.max(5,9,4,7,8))
console.log(Math.random())
console.log((Math.random()*10) + 1)
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+ min)
