/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  //locate letter in string1 check through string 2 to see if it appears, if not, do nothing.
  //if it is there, push it into an empty arr
  //at the end return a joined string
  var returnArr = []
  var letterCheck = string1[0];
  for(var i = 0; i < string1.length; i++){
    for(var j = 0; i < string2.length; j++){
      if(letterCheck === string2[j]){
        returnArr.push(string2[j])
        letterCheck++
      }
    }
  }
  return returnArr.join("")
};
