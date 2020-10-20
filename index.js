// Code your solution here!

function printString(myString) {
  console.log(myString[0])

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  }
  else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length > 1) {
    return reverseString(myString.substring(1, myString.length)) + myString[0]
  }
  else {
    return myString;
  }
}

function isPalindrome(myString) {
  if (myString.length <= 1) {
    return true
  }

  if (myString[0] !== myString[myString.length - 1]) {
    return false
  }
  else {
    return isPalindrome(myString.substring(1, myString.length - 1))
  }
}

function addUpTo(arr, idx) {
  if (arr.length > 1) {
    return arr[0] + addUpTo(arr.slice(1, idx + 1), idx - 1)
  }
  else {
    return arr[0];
  }
}

function maxOf(arr) {
  if (arr.length > 1) {
    if (arr[1] > arr[0]) {
      arr.splice(0, 1);
    }
    else {
      arr.splice(1, 1);
    }

    return maxOf(arr)
  }
  else {
    return arr[0]
  }
}

function includesNumber(arr, num) {
  if (arr[0] === num) {
    return true
  }

  if (arr.length > 1) {
    return includesNumber(arr.slice(1, arr.length), num)
  }
  else {
    return false
  }
}