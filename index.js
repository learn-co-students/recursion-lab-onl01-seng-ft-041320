// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

function reverseString(string, reverse = ''){
    reverse += string[string.length - 1]
      if (string.length > 1){
          let substring = string.substring(0, string.length-1)
          return reverse = reverseString(substring, reverse)
      } else {
          return reverse
      }
  }

  function isPalindrome(string){
      let firstAndLastMatch = string[0] === string[string.length - 1]
      if (string.length > 1 && firstAndLastMatch){
          return isPalindrome(string.substring(1, string.length - 1))
      } else {
         return firstAndLastMatch
      }
  }

  function addUpTo(array, index, sum = 0){
      sum += array[index]
      if (index > 0){
          return addUpTo(array, index - 1, sum)
      } else {
          return sum
      }
  }

  function maxOf(array, max = array[0]){
      if(array.length > 1 && max <= array[0]){
          max = array[0]
          return maxOf(array.slice(1), max)
      } else {
          return max
      }
  }

  function includesNumber(array, number, result = false){
      if(array[0] === number){
          result = true
      } else if (array.length > 1) {
          return includesNumber(array.slice(1), number)
      }
      return result
  }