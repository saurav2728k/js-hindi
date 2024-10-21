const name="saurav"
const repocount=10
//console.log(name + repocount + " value") // this is not readable or not a good practice
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
// above one is called string interpolation
const gamename= new String('saurav')
//console.log(gamename[0])
//console.log(typeof gamename)
console.log(gamename.indexOf('t'))
const newString =gamename.substring(0,4)
console.log(newString)

const anothername=gamename.slice(-5,4)
console.log(anothername)
const newstr="      saurav  "
console.log(newstr)
console.log(newstr.trim())
const url = "https://hitesh.com/hitesh%20chudhary"
console.log(url.replace('%20' ,'-'))
console.log(url.includes('hitesh'))
const firstname = "sauarv-kumar-gupta"
console.log(firstname.split('-'));