// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

function militaryTime(timeStr) {
  var returnTime = Number(timeStr.split(':').join('').split('am').join('').split('pm').join(''))
  //this will give you a number to work with after getting rid of the pesky colon and am/pm
  if(returnTime === 1200){
    return '0000'
  }
  if(returnTime < 1200){
    returnTime += 1200
    return returnTime.toString()
  }
  else if (returnTime >= 1200){
    returnTime -= 1200
    if(returnTime < 100){
      return '00'.concat(returnTime.toString())
    }
    else {
      return '0'.concat(returnTime.toString())
    }
  }  
}


/*
I a string of time
O a string in military time
C 
E 

in most cases, just add 12 to the given string number
if the number goes over 24 however, subtract 12
need to delete the am/pm
return a string with the new time, NO COLON. That's not how military time works and it's more complicated with that there.


function militaryTime(number)
  need to convert the string into a number
  Number() + a bunch of splits and joins should work

  then need to determine if the number is before 1159
  if it's before 1159
  add 1200
  if it's after 1200
  subtract

*/