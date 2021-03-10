//array.splice(start,delete,element1,element2,?,elementn)  
var arr=["Monday","Tuesday","Thursday","Friday"];  
var result=arr.toLocaleString()
console.log(result)

const a = [1, 'a', new Date('08 Jan 1997 17:12:00 UTC')];  
const str = a.toLocaleString('en', {timeZone: "UTC"}); //UTC is the Coordinated Universal Time.  
console.log(str); //on console  
