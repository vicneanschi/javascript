function Animal() {this.eatsVeggies = true; this.eatsMeat = false; }

function Herbivore() {}
Herbivore.prototype = new Animal();

function Carnivore() { this.eatsMeat = true; }
Carnivore.prototype = new Animal();

var rabbit = new Herbivore();
var bear = new Carnivore();

console.log(rabbit.eatsMeat);
console.log(bear.eatsMeat);
