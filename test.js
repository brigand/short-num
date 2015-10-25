  
var shortNum = require('./');

// shortNum(number, decimalPlaces, abbrev=[ "k", "m", "b", "t" ])
console.log(shortNum(12345, 2)) // => '12.34k'
