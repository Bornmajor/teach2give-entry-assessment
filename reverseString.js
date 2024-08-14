//QUESTION 2: REVERSE STRING

const reverseString = (str) =>{
try{
//check if has string
if(typeof str !== 'string'){
    throw new Error('Only string are accepted');
}
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

return reversedStr;

}catch(err){
//return error if not string
console.log(err.message)
}



}
