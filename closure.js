function add(x){
	return function(y){
		return x + y;
	}
};


var addFive = add(5);

//console.log(addFive(1));
//console.log(addFive(10));
//console.log(addFive(20));

function iterate(fn) {
	for(var i=0; i<10; i++){
		console.log(fn(i));
	}
	
}(addFive);

//console.log(fn);


