Install

    npm install --save short-num

Usage

```js
var shortNum = require('short-num');

// shortNum(number, decimalPlaces, abbrev=[ "k", "m", "b", "t" ])
console.log(shortNum(12345, 2)) // => '12.35k'
```

Code from [a StackOverflow question][1] and then modified.

[1]: http://stackoverflow.com/a/2686098/1074592
