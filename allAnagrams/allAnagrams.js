/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  //make an array to return
  //need to find out the length of the string - .length
  // for each letter, modify the return array with that letter starting
  // then push the rest of the letters
  //might need 2 for loops to iterate and place the secondary letters
  var returnArr = [] //what I will return
  var length = string.length //3 for example
    for(var i = 0; i < length; i++){
      returnArr.push(string[i])
    }
    for(var j = 0; j < length; j++){
      returnArr.push(string[j])
    }
  return returnArr.join('')
};
