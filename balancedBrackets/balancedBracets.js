// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {

};



/*
I string with parenthesis, curlys or square brackets in it.
O A true/false based on if the number of brackets is even.
C
E if no brackets, return true

create a function
    check if the number of parenthesis, curly or square brackets is even or not. 
      create counters
        if even
            return true
        if not 
            return false
        if none 
            return true


 function isBalanced(str){
     parCounter = 0;
     curlCounter = 0;
     squaCounter = 0;
    
     //established my counters, this will be how I test if the number of brackets is balanced or not.

    for(var i = 0; i < str.length; i++){
        if(str[i] === '(' || str[i] === ')'){
            parCounter += 1;
        };
        if(str[i] === '{' || str[i] === '}'){
            curlCounter += 1;
        };
        if(str[i] === '[' || str[i] === ']'){
            squaCounter += 1;
        };
    }

    // using a for loop, I will iterate over the string to check each position, if they match either an opening or a closing bracket, add one to the counter. 

    if(parCounter > 0 || curlCounter > 0 || squaCounter > 0){
        if(parCounter % 2 === 0 && curlCounter % 2 === 0 && squaCounter % 2 === 0){
            return true
        }
        else if(parCounter % 2 === 0){
            return true
        }
        else if(curlCounter % 2 === 0){
            return true
        }
        else if(squaCounter % 2 === 0){
            return true
        }
        else {
            return false
        }
    }

    //in this conditional, first I'm checking if 


    return true
 }
*/
