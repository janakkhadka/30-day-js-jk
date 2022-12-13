console.log("hello from day11")


//Destructuring and Spread
const numbers=[1,2,3]
let [numOne,numTwo,numThree]=numbers
console.log(numOne,numTwo,numThree)
console.log(numbers)

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [ , secondPerson, , fourthPerson] = names // first and third person is omitted

console.log(secondPerson, fourthPerson)

//destructaring during iteration
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  for(const [first, second, third] of fullStack) {
  console.log(first, second, third)
  }


//excercise level3
//1
  const countries=
[
  {country: 'England',capital:'London', language: 'English',count:91},
  {country: 'France',capital:'Paris',language: 'French',count:45},
  {country: 'UAE',capital:'Doha',language: 'Arabic',count:25},
  {country: 'Spain',capital:'Madrid',language: 'Spanish',count:24},
  {country: 'Russia',capital:'Kremlin',language:'Russian',count:9},
  {country: 'Portugal',capital:'Lisbon',language:'Portuguese', count:9},
  {country: 'Netherland',capital:'Armsterdam',language:'Dutch',count:8},
  {country: 'Germany',capital:'Berlin',language:'German',count:7},
  {country: 'China',capital:'Beijing',language:'Chinese',count:5},
  {country: 'Nepal',capital:'Kathmandu',language:'Nepali',count:4}
]

for(const {country,capital,language,count} of countries){
    console.log(country,capital,language,count)
}



