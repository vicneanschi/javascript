/**
 * Created by VALVI on 25/01/2016.
 */

"use strict";

function NegaBinaryConverter (){

    /**
     * @param a - is an array of bits from least to most important
     * @returns decimal representation
     */
    this.negaBinaryToDecimal = function (a) {
        var base = -2;

        return a.reduce(function(prev, current, i){
            return prev + current * Math.pow(base, i);
        }, 0);
    };

    /**
     * converts decimal number to negabase representation.
     * result is an array of integers representing bits from least to most important.
     * 0 is represented with an empty array
     *
     * Implementation from  https://en.wikipedia.org/wiki/Negative_base#To_Negabinary
     * */
    this.toNegaBinary = function (number) {
        var Schroeppel2 = 0xAAAAAAAA;
        // Convert to NegaBinary String
        var result = ( ( number + Schroeppel2 ) ^ Schroeppel2 ).toString(2).split('').reverse().map(function(x){return +x;});

        if (result.length === 1 && !result[0]) return [];
        else return result;
    }
}


var negaBinaryConverter = new NegaBinaryConverter();

var a = [1, 0, 0, 1, 1];
var dec = negaBinaryConverter.negaBinaryToDecimal(a);

console.log('%s in negabinary == %s in decimal', a, dec);
console.log('%s in decimal ==  %s in negabinary', -dec, negaBinaryConverter.toNegaBinary(-dec));

var a1 = [1,0,0,1,1,1];
var dec1 = negaBinaryConverter.negaBinaryToDecimal(a1);

console.log('%s in negabinary == %s in decimal', a1, dec1);
console.log('%s in decimal ==  %s in negabinary', -dec1, negaBinaryConverter.toNegaBinary(-dec1));


console.log('Empty sequence should represent 0. ', negaBinaryConverter.negaBinaryToDecimal([]));

console.log('zero in decimal ==  %s in negabinary', negaBinaryConverter.toNegaBinary(0));
