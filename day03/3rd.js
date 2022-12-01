

let empty=null
console.log(empty)



//day3 exercises
//1.

let firstName="Janak"
let country="Nepal"
let city="Kathmandu"
let age=15
let isMarried=true
let year=2020
console.log(typeof(firstName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2.
var check=(typeof(10)==typeof('10'))
console.log(check)

//5.
console.log(4>3)
console.log(4===4)
console.log(4!="4")
var a="python"
var b="jargon"
console.log(a.length<=b.length)

//6.
let j='python'
console.log(j.match("on"))


//7.
const now=new Date()
console.log(now)
console.log(now.getSeconds())
console.log(now.getDate())//day
console.log(now.getMonth())
console.log(now.getDay())//sun-0 mon-1 tue-2..
console.log(now.getTime())//total seconds from 2070
console.log(now.getFullYear())//year

//ex level 2
//1.
/*let m=prompt('Enter breadth')
let n=prompt('Enter height')
alert(0.5*m*n)*/

//4.
/*let r=prompt('Enter radius')
const pi=3.14
alert(pi*r*r)
alert(2*pi*r)*/

//10.
/*let name=prompt("Enter your name")
if(name.length>7)
{
    alert("your name is long")
}
else{
    alert("your name is short")
}*/

//11.
/*let fname=prompt("Enter your first name")
let lname=prompt("Enter your last name")
if(fname.lenght>lname.lenght)
{
    document.write("Your name is longer than your family name")
}
else{
    document.write("your family name is longer than your first name")
}*/
//12
/*let age1=prompt("Enter first age")
let age2=prompt("Enter second age")
if(age2>age1)
{
    let temp=age2-age1
    document.write("Iam",temp," years older than you")
}
else{
    document.write("Iam",age1-age2," years younger than you")
}*/
//13.
/*let dob=prompt("Enter you dob")
let cyear=now.getFullYear();
cyear=cyear+57
if(cyear-dob>=18)
{
    document.write("You are",cyear-dob,".You are old enough to drive.")
}
else
{
    document.write("You are ",cyear-dob,".You will be allowed to drive after ",18-(cyear-dob)," years.")
}*/
//15
document.write(now.getFullYear(),"-",now.getMonth()+1,"-",now.getDate()," ",now.getHours(),":",now.getMinutes())


//level-3



