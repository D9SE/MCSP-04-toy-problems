//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

function flatten(array) {
    //if array has an array as an element, get the elements out of the inner array and put it back into the outter one. 
    var returnArr = []
    for(var i = 0; i < array.length; i++){
        if(array[i].length === undefined){
            returnArr.push(array[i])
        }
        if(array[i].length !== undefined){ //if there is an array at any of the spots
            var innerArr = array[i] //put the array in a vari
            
        }
        
    }








    return returnArr
}
