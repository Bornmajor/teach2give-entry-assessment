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
