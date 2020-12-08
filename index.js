function printString(string){
    console.log(string[0])
    if(string.length > 1){
        printString(string.slice(1))
    }
}

function reverseString(string){
    if(string.length === 0){
        return ""
    } else {
        return string[string.length - 1] + reverseString(string.slice(0, string.length - 1))
    }  
}

function isPalindrome(string){
    if (string.length > 1){
        if(string[0] === string[string.length - 1]){
            return isPalindrome(string.slice(1, string.length - 1))
        } else {
            return false
        }
    } else {
        return true
    }
}

function addUpTo(array, index){
    if (index > 0) {
        return addUpTo(array, index - 1) + array[index]
    } else {
        return array[index]
    }
}

function maxOf(array){
    if(array.length > 1){
       return Math.max(array.pop(), maxOf(array))
    } else {
        return array[0]
    }
}

function includesNumber(array, num){
    if(array.shift() === num){
        return true
    } else {
        return array.length > 0 ? includesNumber(array, num) : false
    }
}