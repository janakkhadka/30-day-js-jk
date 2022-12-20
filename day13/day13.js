console.log("Hello from day 13")


//console object method
console.log('%c30 %cDays %cof %cJavascript','color:red','color:blue','color:green','color:orange')

console.warn("this is warning");

console.error('This is an error message');

const arr=['janak','garima','khadka','khulal']
console.log(arr);
console.table(arr)

const countries = [  //for array
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

  const user = {  //for obj
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)



  console.info('30 days of javascript')



  console.assert(4>4,'4 is greater than 3')




  //console.group

  const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries1 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user1 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries1')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user1)
console.log(users)
console.groupEnd()


//console.count

const abc=()=>{
    console.count('Function has been called')
}

abc()
abc()
abc()

//console.clear();

//excercise level 3
//1.

const countries2 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries2.length; i++) {
    console.log(countries2[i][0], countries2[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries2) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries2.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

  












