console.log('day19')


//closure

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


//excercise level 2 1
function outer(){
    let a=5;
    function inner1(){
        a+=5;
        function inner2(){
            a+=10;
            function inner3(){
                a+=5;
                return a;
            }
            return inner3;
        }
        return inner2;
    }
    return inner1;
}
//note
const b=outer()
const c=b()
const d=c()
const e=d()
console.log(e);