console.log('%chello','color:green')

//class and object
// class Person {
     // code goes here
//   }
//   const person = new Person()
//   console.log(person)


  //class 2
  class Person {
    constructor(firstName, lastName) {
      //console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  const person1=new Person()
  const person = new Person('janak','khadka')
  console.log(person1)
  console.log(person)



  //class 3
  class Student{
    constructor(name,address){
      this.name='Janak';
      this.address="Dhankuta"
    }
    displayInfo(){
      const info=this.name+' and '+this.address;
      return info;
    }
  }
  const obj=new Student;
  console.log(obj)
  console.log(obj.displayInfo())


  //date time
 function showDateTime()
  {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds();
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes + ':' +seconds;
    let fullTime = dateMonthYear + ' ' + time
    return fullTime;
  }
function interval()
{
  console.log(showDateTime())
}
//setInterval(interval,1000)


//excercise level 1 and 2

//not completed
class Animal{
  constructor(name,age,color,legs) 
  {
    this.name='cow'
    this.age=10;
    this.color='black'
    this.legs=4
  }
  displayAnimal() {
    const fullinfo=this.name+' '+this.age+' '+this.color+' '+this.legs
    return fullinfo;
  }
}
const animalobj= new Animal()
console.log(animalobj.displayAnimal())

class Dog extends Animal{
  displayAnimal(){
    const fullinfoc='Dog'+' '+ 10 +" "+this.color+' '+this.legs
    return fullinfoc;
  }
}
const dogobj= new Dog();
console.log(dogobj.displayAnimal())







