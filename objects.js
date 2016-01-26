var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = 'foo';
map[bar] = 'bar';

console.log(map[foo]); // prints 'bar' because keys are always string