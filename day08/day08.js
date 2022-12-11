console.log("Hello from day 8th");




let person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  location:'dhankuta',
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // dhankuta

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])

person = {
    firstName: 'Asabeneh',
    age: 25,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  console.log(person.getPersonInfo())//function call

  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)
  const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

const values = Object.values(copyPerson)
console.log(values)


//excercise level 2
//2.
const users={
  Janak:{
    email:'janakkhadka08@gmail.com',
    skills:['Html','css','js'],
    age:22,
    isLoggedIn:true,
    points:100
  },
  Satya:{
    email:'satyaraj@gmail.com',
    skills:['html','css','js','react','rust','java','MERNstack'],
    age:50,
    isLoggedIn:true,
    points:80
  },
  Abhihek:{
    email:'abhishek@gmail.com',
    skills:['Html','css','js','c++'],
    age:27,
    isLoggedIn:true,
    points:55
  },
  Bishal:{
    email:'bishal@gmail.com',
    skills:['html','css','js','react','rust','java','MERN stack'],
    age:50,
    isLoggedIn:false,
    points:85
  },
}
  
//3
console.log(Object.values(users.Satya.skills))
  console.log(Object.values(users.Satya.skills.toString()))

  const abc=['janak'];
  console.log(abc.toString())

  //3 ko milena


  