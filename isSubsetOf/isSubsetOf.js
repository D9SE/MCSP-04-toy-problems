/*
 * Make an array method that can return whether or not a context array is a
 * subset of an  input array. To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function(arr) {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === Array && i === arr.lenth-1){
      return true
    }
    else {
      return false
    }
  }
};


/* 
I arr
O boolean
C 
E
  take an array
   iterate through it
    check if all the elements in it match the thing left of the .
    return true or false
*/