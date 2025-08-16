let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toLocaleTimeString())

//this myDate type is object because we created it as object
let myCreatedDate = new Date("01-14-2023")


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday : 'long'
})