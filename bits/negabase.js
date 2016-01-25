/**
 * Created by VALVI on 25/01/2016.
 */

"use strict";

console.log((1).toString(2));
var neg = -3;
//console.log(typeof(neg));
console.log((-3 >>> 0).toString(2));
//11111111111111111111111111111111

var a = [1, 0, 0, 1, 1];


//function negaBinaryToDecimal(a) {
//    a.reverse();
//    var base = -2;
//    var result = 0;
//
//    for (var i = 0; i < a.length; i++) {
//        console.log('i=%s, a[i]=%s', i, a[i]);
//        var part = a[i] * Math.pow(base, i);
//        result += part;
//    }
//
//    return result;
//}

//without reverse
function negaBinaryToDecimal(a) {
    var base = -2;
    var result = 0;

    for (var i = a.length - 1; i >= 0; i--) {
        console.log('i=', i);
        result += a[i] * Math.pow(base, a.length - (i + 1));
    }

    return result;
}

function toNegaBinary(number) {
    var Schroeppel2 = 0xAAAAAAAA;
    // Convert to NegaBinary String
    return ( ( number + Schroeppel2 ) ^ Schroeppel2 ).toString(2);
}

var dec = negaBinaryToDecimal(a);

console.log(dec);

console.log(toNegaBinary(-dec));

