// // //arrays
// // //const arr=Array()
// // //console.log(arr)


// // arr=[]
// // console.log(arr)
// // const numbers=[0,1,2,3,4,5]
// // console.log(numbers)
// // const fruits=["mango","apple","banana"]
// // console.log(fruits)
// // console.log(fruits.length)

// // //different data types in single array
// // const arr1= [
// //     'Asabeneh',
// //     250,
// //     true,
// //     { country: 'Finland', city: 'Helsinki' },
// //     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// // ] // arr containing different data types
// // console.log(arr1)
// // //let js = 'JavaScript'
// // // const charsInJavaScript = js.split('')

// // // console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// // // let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// // // const companies = companiesString.split(',')

// // // console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// // // let txt =
// // //   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// // // const words = txt.split(' ')

// // // console.log(words)
// // // // the text has special characters think how you can just get only the words
// // // // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
// // const arr3='facebook,google,yaahoo,youtube'
// // const arr4=arr3.split(',')
// // console.log(arr4)


// // console.log(arr3.length-1)
// // console.log(arr4.length-1)


// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues) // [empty x 8]

// const array5=[1,2,3,4,5]
// console.log(array5.indexOf(5))


// const numbers1 = [1, 2, 3, 4, 5]
// console.log(numbers1.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

//excercise level 1
//1.
const arr=Array()
console.log(arr)

//2.3.
const arr1=[1,2,3,4,5,6]
console.log(arr1[3])
console.log(arr1.length-1)


console.log(arr1.toString())
const arr4='janak'
console.log(arr4.split(''))
//.6
const companies=["Amazon","Apple","MIcrosoft","Bing","Google","Yaahoo"]
//7.
console.log(companies)

//8.
console.log(companies.length)

//9.
console.log(companies[0])
console.log(companies[companies.length-1])
console.log(companies[Math.round((companies.length-1)/2)-1])
console.log(companies[companies.length/2])

//10
for(i=0;i<(companies.length);i++)
{
    console.log(companies[i])
}

//11
for(i=0;i<(companies.length);i++)
{
    console.log(companies[i].toUpperCase())
}

//12
console.log(companies.toString())

//14
for(i=0;i<(companies.length);i++)
{
    if(companies[i].includes('o' && 'o'))
    {
    console.log(companies[i])
    }
}



//excersine level 2


