function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function(){
    console.log('吃饭');
}
function Tiger(name){
    this.age = 10;
    Animal.call(this,'mike')//可以传参
}
Tiger.prototype.sayName = function() {
    console.log('老虎');
}
// Tiger.prototype = new Animal();
// Object.setPrototypeOf(Tiger.prototype,Animal.prototype);
Tiger.prototype = Object.create(Animal.prototype);
let a = new Animal();
let b = new Tiger();
// 1）tiger继承animal实例上的属性
// Animal.call(this);
console.log(b.name);
console.log(b.eat());
// 2）Tiger继承Animal原型上的属性
// Tiger.prototype = new Animal();这种不方便传参
// Tiger.prototype.__proto__ = Animal.prototype;
// Object.setPrototypeOf(Tiger.prototype,Animal.prototype);
//Tiger.prototype = Object.create(Animal.prototype);
