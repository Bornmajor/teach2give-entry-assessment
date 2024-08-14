//OSBORN MAJA INTERVIEW ANSWERS

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



//QUESTION 3: FILTER EVEN NUMBERS

const filterEvenNumbers = (inputArray) =>{
try{
 // Check if all elements in the array are numbers
 if (!Array.isArray(inputArray) || !inputArray.every(item => typeof item === 'number')) {
    throw new Error("Input must be an array of numbers");
}

  // Filter the even numbers
  const evenNumbersArray = inputArray.filter(number => number % 2 === 0);

  console.log(evenNumbersArray)
  // Return the new array with only even numbers
  return evenNumbersArray;

}catch(err){
//return error if array is not of numbers
console.log(err.message);
}

}


