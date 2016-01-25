//http://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript

var assert = require('assert');

// double tilde
assert.equal(~~(5/3), 1);
assert.equal(~~(-5/3), -1);

// zero shift is considered to be the fastest
// TODO: create test
assert.equal((5/3)>>0, 1);
assert.equal((-5/3)>>0, -1);

// Math.floor doesn't work with negative
assert.equal(Math.floor(5/3), 1);
// this is failing. Returns -2
//assert.equal(Math.floor(-5/3), -1);


function runTest(fn, count) {
	var startTime = Date.now();
	var i;

	for(i=0; i<count; i++) {
		fn();
	}
	
	return Date.now() - startTime;
}


var n = Math.pow(10, 9);


var ms = runTest(function() {
	return ~~(5/3);
}, n)

console.log('Double tilde took %s ms', ms);

// reset the timer
ms = runTest(function() {
	return Math.floor(5/3);
}, n);

console.log('Math foor took %s ms', ms);
// reset the timer
var startTime = Date.now();

ms = runTest(function() {
	return (5/3)>>0;
}, n);

console.log('Zero shift took %s ms', ms);

/*
node v0.10.33
Double tilde took 1054 ms
Math foor took 5011 ms
Zero shift took 3357 ms

node v4.2.6
Double tilde took 917 ms
Math foor took 4195 ms
Zero shift took 4191 ms
*/