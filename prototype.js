'use strict';
function printPrototypeChain(obj) { 
	var result = [];
	var i=0;
	while(obj != null) {
		//console.log(i++);
		result.push(typeof obj);
		//result += ' -> ';
		obj = obj.prototype;
	}
	
	
	console.log(result.join('->'));
}

var o = Object.create(null);
printPrototypeChain(o);

var o1 = {a: 'hello'};
console.dir(o1.__proto__);
printPrototypeChain(o1);

var o2 = [1,2,3];
printPrototypeChain(o2);

function Animal(){}

var o3 = new Animal();
printPrototypeChain(o3);