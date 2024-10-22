//Dates

let mydate = new Date()
console.log(mydate)
console.log(mydate.toString());
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toDateString())
// there are more like this
//console.log(typeof mydate)

let mycreateddate = new Date(2025,0,23)
console.log(mycreateddate.toDateString())  // Month starts from 0
let minedate= new Date(2025,1,15,5,30)
console.log(minedate.toLocaleString())

let letdate = new  Date("01-14-2023")
console.log(letdate.toLocaleString())
let mytimestamp= Date.now()
console.log(mytimestamp)  // in miliseconds  from 1970 
console.log(letdate.getTime()) // it will convert in miliseconds
console.log(Math.floor(Date.now()/1000))  // in seconds  why floor because some value will be in decimal
let newdate = new Date()
console.log(newdate.getMonth())  // Month starts from 0
//console.log(newdate.getDate())
