console.log('day17')


//local storage

// localStorage.setItem('firstName','Janak')
// localStorage.setItem('age',200)
// console.log(localStorage)


const skills=['Html','css','js']
const skillsJson=JSON.stringify(skills,undefined,4)
localStorage.setItem('skills',skillsJson)
console.log(localStorage)


let skills1=localStorage.getItem('skills')
console.log(skills1)
let skillsobj=JSON.parse(skills1,undefined,4)
console.log(skillsobj)

localStorage.clear()

console.log(localStorage)


//excercise
const student={
    firstname1 :'janak',
    skillss:['html','css'],
    country: 'Nepal'
}
const txt2=JSON.stringify(student,undefined,4)
localStorage.setItem("firstname","janak")
console.log(localStorage)


