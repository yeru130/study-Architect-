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

class Animal{
    static flag() {//返回静态类
        return 123;
    }
    constructor(name){//实例上的方法
        this.name = name;
        this.eat = '吃肉'
        function study(){};
    }
    say(){//原型上的方法
        console.log('sayName');
        console.log(this);//如果单独调用原型上的方法，this是不存在的
    }
}
let animal = new Animal();//类不能当函数调用
// animal.say();//

class Tiger extends Animal{
    // constructor(name){//写这句话你想让子类继承父类的什么属性就写什么属性
    //     super(name);
    // }
}
let tiger = new Tiger('老虎');
console.log(tiger.say());
console.log(tiger.eat);
console.log(tiger.name);




class Animal {
    static flag() {
        return 123;
    }
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log('sayName');
    }
}
let animal = new Animal();
class Tiger extends Animal{

}
let tiger = new Tiger('王老虎');
console.log(tiger.name);
console.log(tiger.say());
