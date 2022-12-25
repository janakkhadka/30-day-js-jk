console.log('day18')


//promises

const dosomething=callback=>{
    setTimeout(()=>{
        const skills=['Html','css','js']
        callback(skills,"it did not go well")
    },2000)
}
const callback=(err,result)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
}
dosomething(callback)



//api
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens


//excercise level 3 1
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
fetch(catsAPI)
.then(response=>response.json())
.then(data=>{
    console.log(data)
})
.catch(error=>console.error(error))

//extra practices
const random='https://randomuser.me/api/'
fetch(random)
.then(response=>response.json())
.then(data=>{
    console.log(data)
})


//trying
fetch('http://universities.hipolabs.com/search?country=United+States')
.then(response=>response.json())
.then(data=>{
    console.log(data)
})

