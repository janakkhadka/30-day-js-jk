console.log('hello')

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

  //example
  const mno = a => {
    const bcd = b => {
        return 2*a+b;
    }
    return bcd
  }
  console.log(mno(5)(4))

  
  //functional programming
  //foreach
  const numbers=[1,2,3,4,5];
  let sumArray = arr => {
    let sum=0;
    const callback=function(element) {
        sum+=element;
    }
    arr.forEach(callback)
    return sum;
  }
  console.log(sumArray(numbers))


  function efg(){
    console.log("hello from fucntion");
  }
  efg();
  //setInterval(efg,1000)

  //setTimeout(efg, 5000);

let sum=0
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(num => console.log(num))
numbers1.forEach(num=>sum+=num)
console.log(sum)

const array1=['janak','satya','bishal','binaya']

array1.forEach(xyz => console.log(xyz))
array1.forEach(xyz => console.log(xyz.toUpperCase()))
//map
const map1=array1.map(pq=>pq.toUpperCase().slice(0,3))
console.log(map1)

//filter
const filter1=array1.filter(rs=> rs.includes('bi'))
console.log(filter1)


const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)



//excercise level 3
//1.

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
//country
  countries.sort(function(a,b){
    if(a.country<b.country) return -1
    if(a.country>b.country) return 1
    return 0
  })
  console.log(countries)

//capital
countries.sort(function(a,b)
{
  if(a.capital<b.capital) return -1
  if(a.capital>b.capital) return 1
  return 0
})
console.log(countries)

//on the basis of population
countries.sort(function(a,b)
{
  if(a.count>b.count) return -1
  if(a.count<b.count) return 1
  return 0
})
console.log(countries)


//sorting strin
const abc=['janak','bipin','satya']
console.log(abc.sort())

//sorting numbers
const bcd=[1.5,6,7,90,3,1,0]
bcd.sort(function(a,b){
  return a-b //ascending
}
)
console.log(bcd)
bcd.sort(function(a,b){
  return b-a //descending
}
)
console.log(bcd)



//addititonal
//setinterval and settimeout

function abcd(){
  console.log('hello')
}


//setInterval(abcd,1000)
setTimeout(abcd,1500)












