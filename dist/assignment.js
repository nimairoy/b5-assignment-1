"use strict";
// Problem 1
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString('Next Level Web Development Course'));
console.log(formatString('Bangladesh', true));
console.log(formatString('Bangladesh', false));
