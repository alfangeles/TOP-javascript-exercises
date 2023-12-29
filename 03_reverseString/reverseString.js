const reverseString = function(stringToReverse) {
    let stringReversed = ""

    for (let i = 0; i <= stringToReverse.length; i++) {
        if (i == 0) {
            continue
        }
        stringReversed += stringToReverse[stringToReverse.length - i]
        
    }

    return stringReversed;

   
};

console.log(reverseString("hellow"));

// Do not edit below this line
module.exports = reverseString;
