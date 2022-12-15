console.log('euuu')

//Regualar expressions
/*Flags

Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline
*/

// without flag
let pattern4 = 'love'
let regEx = new RegExp(pattern4)
console.log(regEx)

 
//with flag
pattern3 = 'love'
 flag = 'gi'
 regEx = new RegExp(pattern3, flag)
 console.log(regEx)



 const str = `I love JavaScript`
const pattern1 = /love/m;
const result = str.match(pattern1);
console.log(result);
//document.getElementById("abc").innerHTML=result;


const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b\w{4}\b/g  //  exactly four character words
const matches = txt.match(pattern)
console.log(matches)  //['This', 'made', '2019']


//excercise level 3
//1
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(sentence)
const matchi=sentence.replace(/%|@|$|#|&/g,'')
console.log(matchi)

