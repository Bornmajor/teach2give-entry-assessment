//QUESTION 1:COUNT VOWEL

const countVowels = (str)=> {
try{
//check if has string
if(typeof str !== 'string'){
    throw new Error('Only string are accepted');
}

 // Define a string containing all the vowels (both lowercase and uppercase)
 const vowels = 'aeiouAEIOU';

 // Initialize a counter for vowels
let count = 0;

// Loop through each character in the  string
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
//console.log(count);

return count;  

}catch(err){
//return error if not string
console.log(err.message)
}


}
