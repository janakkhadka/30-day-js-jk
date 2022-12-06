//function
// function add(){
//     let a=4
//     let b=5
//     let sum=a+b
//     console.log(sum)
//     return sum
// }
// console.log(add())

// function multiply(a,b){
//     sum=a+b
//     return sum
// }
// console.log(multiply(5,5))

// //funtion with many parameters
// function sumarr(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum;
// }
// const numbers=[1,2,3,4,5,6]
// console.log(sumarr(numbers))

// const areaOfCircle=(radius)=>{
//     let area=Math.PI*radius*radius;
//     return area;
// }
// console.log(areaOfCircle(10))


// const changeToUpperCase = arr => {
//     const newArr = []
//     for (const element of arr) {
//       newArr.push(element.toUpperCase())
//     }
//     return newArr
//   }
  
//   const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
//   console.log(changeToUpperCase(countries))
  
//   // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


//   const greetings=(name='Peter')=>{
//     let message=name+',Weclome to 30 Days of JS!'
//     return message
//   }
//   console.log(greetings())
//   console.log(greetings('Asabeneh'))


  //excercise level 3
  //1
//   const arr=[]
//   function userIdGeneratedByUser(){
//   let c=prompt("Enter character:");
//   let d=prompt("Enter number of ids:");
//   for(let i=0;i<d;i++)
//   {
//     arr.push(c.charAt(Math.random()*c.length))
//   }
//   }
//   userIdGeneratedByUser();
//   console.log(arr)

  //2
  const arr1=[]
  function rgbColorGenerator(r,g,b){
        let z='rgb('+r+','+g+','+b+')';
        return z;
  }
  console.log(rgbColorGenerator(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255)))


  //19

  const arr2=[]
  function sevran(){
    for(let i=0;i<7;i++)
    {
        arr2.push(Math.round(Math.random()*9))
    }
    return arr2;
  }
  console.log(sevran())

 

