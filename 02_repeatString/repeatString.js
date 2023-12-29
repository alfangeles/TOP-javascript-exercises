const repeatString = function(stringToRepeat, numberOfTime) {
    //Create a variable to hold the string you're going to return
    let stringRepeated = "";
    
    //returns ERROR with negative numbers
    if (numberOfTime < 0) {
        return "ERROR";
        
    }

    //create a loop that repeats the given number of times and add the given string to the result on each loop.
    for (let i = 0; i < numberOfTime; i++) {
        stringRepeated += stringToRepeat;
        
        
    }

    return stringRepeated; 
};

// Do not edit below this line
module.exports = repeatString;
