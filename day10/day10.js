console.log('hello from day10')

//set
const languages=[
    'english',
    'nepali',
    'french',
    'chiniese'
]
const setOfLanguage=new Set(languages)
console.log(setOfLanguage)
setOfLanguage.delete('english')
console.log(setOfLanguage.has('english'))
setOfLanguage.add('english')
console.log(setOfLanguage.has('english'))


//union of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
console.log(c)

let A = new Set(a) //optional
let B = new Set(b)  //optional
let C = new Set(c)
console.log(C)

//intersection of sets
 a = [1, 2, 3, 4, 5]
 b = [3, 4, 5, 6]

 A = new Set(a)
 B = new Set(b)

 c = b.filter((num) => A.has(num))  //has only works for set and filter for array only
 C = new Set(c)

console.log(C)

//difference of sets
 a = [1, 2, 3, 4, 5]
 b = [3, 4, 5, 6]

 A = new Set(a)
 B = new Set(b)

 c = a.filter((num) => !B.has(num))  //a-b
 C = new Set(c)
 console.log(C)
 c=b.filter(num=>!A.has(num))  //b-a
 C=new Set(c)
console.log(C)


//mapping
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)

  map.set('Nepal','Kathmandu',)  //adding value
  console.log(map)

  console.log(map.get('Nepal'))  //getting values

   console.log(map.has('Norway'))  //check 


for(const country of map){
    console.log(country)
}




//excercise level 3
//1,
const languages1 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
const abcd=new Set(languages1)
console.log(languages1)
console.log(abcd)
console.log('there are '+abcd.size+' languages.')




