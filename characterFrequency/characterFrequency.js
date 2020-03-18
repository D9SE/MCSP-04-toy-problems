// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(str) {
    var counter = 0 //this will be on the end
    var bigArr = [] //this holds all the smaller arrays
    for(var i = 0; i < str.length; i++){ //iterate through the string
        var innerArr = [] //create a new arr to hold the letter
        innerArr.push(str.push(str[i])) //push that letter into the inner array
        innerArr.push(counter)
        bigArr.push(innerArr) //push that into the bigger array
    }



    return bigArr
}
