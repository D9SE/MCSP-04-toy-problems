// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

const consecutiveOnes = array => {
  //create counter
    let counter = 0;
  //for loop to iterate over the array
    for(let i = 0; i < array.length; i++){
      //if the element + 1 = 1, incriment the counter 
      if(counter === 0 && array[i] === 1){
        counter += 1
        if(array[i+1] !== 1){
          //if the element + 1 !== 1, do nothing.
          counter = 1
        }
      }
      //if a later element = 1, restart the incrimentation
        if(counter === 1 && array[i] === 1 && (array[i+1] === 1 || array[i-1])){
        counter +=1
      }
    }
    //when for loop closes, return counter
  return counter
  }




/*
I an array of numbers, possibly in that array are consecutive number 1's
O returns the number of consecutive 1's
C
E if no ones, return 0

create function
  make a counter to incriment when a one is discovered.
    for loop to iterate over the array
      if the element + 1 = 1, incriment the counter
      if the element + 1 !== 1, do nothing.
      if a later element = 1, restart the incrimentation
    when for loop closes
  return counter

create a function

const consecutiveOnes = array => {
//create counter
  let counter = 0;
//for loop to iterate over the array
  for(let i = 0; i < array.length; i++){
    //if the element + 1 = 1, incriment the counter 
    if(counter === 0 && array[i] === 1){
      counter += 1
      if(array[i+1] !== 1){
        //if the element + 1 !== 1, do nothing.
        counter = 1
      }
    }
    //if a later element = 1, restart the incrimentation
    if(counter === 1 && array[i] === 1 && array[i+1] === 1){
      counter +=1
    }
  }
  //when for loop closes, return counter
return counter
}

*/