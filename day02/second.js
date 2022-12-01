//primitive data types
let word='javascript'
word[0]='Y'
console.log('hellosss')
let numOne=3
let numTwo=3
console.log(numOne==numTwo) //true
let js='javascript'
let py='python'
console.log(js==py)

let lighton=true
let lightOff=false
console.log(lighton==lightOff)  //false

//non primitive data types
let nums=[1,2,3]
nums[0]=10
console.log(nums)//[10,2,3]

let nums1=[1,2,3]
let numbers=[1,2,3]
console.log(nums1==numbers)

let userOne={
    name:'Janak',
    role:'teaching',
    country:'Nepal'
}
let userTwo={
    name:'Janak',
    role:'teaching',
    country:'Nepal'
}
console.log(userOne==userTwo) //false

let nums3=[1,2,3]
let numbers1=nums3
console.log(nums3==numbers1)
let userTwo1={
    name:'Janak',
    role:'teaching',
    country:'Nepal'
}
let userOne2=userTwo1
console.log(userOne2==userTwo1)//true

//string methods
let name1='Javascript'
console.log(name1.toUpperCase()) //uppercase
let name2='Janak'
console.log(name2.toLowerCase()) //lowercase
let var2='Javascript'
console.log(var2.substr(4,6))
let var3='Nepal'
console.log(var3.substr(3,4))

let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

let string1 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string1.search('love'))          // 2
console.log(string1.search(/javascript/gi))  // 7
console.log(Math.min(2,3,4,6,-9,8,0,2))

//ex level-2 4
let num4=9.8
let numint=parseInt(Math.round(num4))
document.write(numint)










