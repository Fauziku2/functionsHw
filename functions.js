// short 1
function maxOfTwoNumbers (num1, num2) {
  if (num1 > num2) {
    return num1
  } else { return num2 }
}
console.log(maxOfTwoNumbers(5, 50))

// short 2
function maxOfThree (num1, num2, num3) {
  if ((num1 > num2) && (num1 > num3)) {
    return num1
  } else if ((num2 > num1) && (num2 > num3)) {
    return num2
  } else { return num3 }
}
console.log(maxOfThree(10, 20, 50))

// short 3
function isCharacterAVowel (character) {
  if ((character === 'a') || (character === 'e') || (character === 'i') || (character === 'o') || (character === 'u')) {
    return true
  } else {
    return false
  }
}
console.log(isCharacterAVowel('x'))

// short 4
function sumArray (numArray) {
  var total = 0
  for (var i = 0; i < numArray.length; i++) {
    total += numArray[i]
  }
  return total
}
sumArray([1, 2, 3, 10])
function multiplyArray (numArray) {
  var total = 1
  for (var i = 0; i < numArray.length; i++) {
    total *= numArray[i]
  }
  return total
}
console.log(sumArray([1, 2, 3, 10]))
console.log(multiplyArray([1, 2, 3, 10]))

// short 5
function argReturns () {
  return arguments.length
}
console.log(argReturns(3, 'jack', 6, 'bob', 7, 'GA', 17))

// short 6
function reverseString (str) {
  var newStr = str.split('').reverse().join('')
  return newStr
}
console.log(reverseString('Fauzi'))

// short 7
function findLongestWord (arrOfWords) {
  var longWord = 0
  for (var i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > longWord) {
      longWord = arrOfWords[i].length
    }
  }
  return longWord
}
console.log(findLongestWord(['pizza', 'bicycle', 'fast', 'one']))

// short 8
function filterLongWord (array, int) {
  var longWord = []
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > int) {
      longWord.push(array[i])
    }
  }
  return longWord
}
console.log(filterLongWord(['DearGod', 'goat', 'barber', 'gorengpisang'], 5))

// long 1
function lengths (array) {
  var numArr = []
  for (var i = 0; i < array.length; i++) {
    numArr.push(array[i].length)
  }
  return numArr
}
var words = ['hello', 'what', 'is', 'up', 'dude']
console.log(lengths(words))

// long 2
function transmogrifier (num1, num2, num3) {
  var ans = Math.pow((num1 + num2), num3)
  return ans
}
console.log(transmogrifier(5, 4, 3))
console.log(transmogrifier(13, 12, 5))
console.log(transmogrifier(42, 13, 7))

// long 3
function wordReverse (str) {
  var revStr = str.split(' ').reverse().join(' ')
  return revStr
}
console.log(wordReverse('Now I know what a TV dinner feels like'))
console.log(wordReverse('Put Hans back on the line'))
