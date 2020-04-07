// INSTRUCTIONS
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

function bubbleSort(array) {
    var holder;
    for(var i = 1; i < array.length; i++){
        for(var j = 0; j < array.lenth-1; j++){
            if(array[j] > array[i]){
              holder = array[i]
              array[j] = holder
              array[i] = array[j]
            }
        }
    }
    return array
}



/*
I unsorted array
O sorted array
C do not use array.sort
E 

Use a nested for loop to iterate over the array to see which element is bigger
If the bigger element is on the left, swap it with the right, if it's smaller, leave it
return the sorted array.






*/