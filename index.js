function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString === "")
    return "";
  else
    return reverseString(myString.substr(1)) + myString.charAt(0);
}

function isPalindrome(myString){
  if (myString.length < 2) {
    return true;
  }

  if (myString.charAt(0) === myString.charAt(myString.length-1)) {
    return isPalindrome(myString.substring(1, myString.length-1));
  }

  return false;
};

function addUpTo(array, index){
  if (index > 0){
    return (array[index] + addUpTo(array, index-1))
  }
  else{
    return array[index]
  }
}

function maxOf(arrayOfNumbers){
  if(arrayOfNumbers.length === 1){
    return arrayOfNumbers[0]
  }
  else{
    return Math.max(arrayOfNumbers.shift(), maxOf(arrayOfNumbers))
  }
}

function includesNumber(array, num){
  if (array.length === 0) {
    return false;
  } else {

    if (array[0] === num) {
      return true;
    } else {
      array.splice(0,1);
    }

  }

  return includesNumber(array, num);
}