/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var quicksort = function(array) {
    var pivot = array[0]
    var smaller = []
    var bigger = []
    for(var i = 1; i < array.length; i++){
        if(array[i] >= pivot){
            bigger.push(array[i])
        }
        if(array[i] < pivot){
            smaller.push(array[i])
        }
    }
  return quicksort(smaller).concat(pivot).concat(quicksort(bigger))
};
