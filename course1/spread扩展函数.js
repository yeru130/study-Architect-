// es6的...扩展函数用来展开数组和对象
//...的本质是for of函数（扩展一个for of和for in 的区别），for in 用来迭代纯对象比较合适，for of 可以迭代基本所有可迭代的对象
var obj = {name:'yeru', age: 29};
for(var key in obj){
    console.log(key);//最重要的是key值
    console.log(obj[key]);
}
for(var val of obj){
    console.log(val);//obj is not iterable报错，for of不能循环纯对象，因为春对象没有iterable
}
var arr = [1,2,3];
console.log(...arr);

//扩展函数可以用来进行浅拷贝
let a = {name: 'yeru', age: 29};
let b = {job: 'softWare Engineer'};
let newObj = {...a,...b};
console.log(newObj);
//下面编写一个浅拷贝的方法（深度拷贝完以后的对象，不受之前拷贝的对象的影响）
//判断函数类型的方法 1）typeof 2) instanceof 3)constructor 4) Object.prototype.toString.call()
function deepClone(obj) {
    if(typeof obj !== 'object') return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    let newObj = {};
    for(let key in obj) {
        newObj[key] = obj[key];
    }
    return newObj;
}
let n = deepClone({1:1,2:2});
console.log(n);
//下面编写一个深拷贝的方法
function deepClone(obj) {
    if(typeof obj !== 'object') return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    let newObj = new obj.constructor;
    for(let key in obj) {
        newObj[key] = deepClone(obj[key]);
    }
    return newObj;
}
let n = deepClone([1,2,3]);
console.log(n);