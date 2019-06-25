//数组常见的方法es5
//push 和pop 从数组尾部添加和删除
let arr = [1,2,3];
console.log(arr.push(4));//4
console.log(arr);//[1,2,3,4]

let arr = [1,2,3];
console.log(arr.pop());//3
console.log(arr);//[1,2]

//shift 和unshift从数组头部删除和添加
let arr = [1,2,3];
console.log(arr.shift());//1
console.log(arr);//[2,3]

let arr = [1,2,3];
console.log(arr.unshift(4));//4
console.log(arr);//[4,1,2,3]

//数组的reverse() 和sort() 排序方法
let arr = [1,2,3];
console.log(arr.reverse());//[3,2,1]
console.log(arr.sort());//[1,2,3]

//concat 和slice 拼接和截取,原数组不变
let arr = [1,2,3];
var newArr = arr.concat(1)
console.log(arr);// [1,2,3]原数组不变
console.log(newArr);//[1,2,3,1]
console.log(arr.join(''));// 123//string没有join方法
console.log(arr);//[1,2,3]// 原数组不变
let arr = ['今天,玩得,开心'];
console.log(arr[0].split(',')); //split方法针对字符串进行改变的
[ '今天', '玩得', '开心' ]

let arr = [1,2,3];
var newArr = arr.slice(1)
console.log(arr);// [1,2,3]原数组不变
console.log(newArr);//[2,3]
console.log(arr.slice(1,2));//2

//splice方法可以删除，插入，替换方法,原数组改变，正常的都用原数组的方法
// 删除：splice(要删除的第一项位置，要删除的个数)
let arr = [1,2,3,4,5,6];
arr.splice(1,2)
console.log(arr);//[1,4,5,6]
//插入：splice(起始位置，0，要插入的项数)
let arr = [1,2,3];
arr.splice(1,0,8,9)
console.log(arr);//[1,8,9,2,3]
//替换: splice(起始位置，要删除的项数，要替换的项数)
let arr = [1,2,3];
arr.splice(1,1,8,9)
console.log(arr);//[1,8,9,3]
// 总的来总结splice的方法的应有
// arr.splice(起始项的位置，删除项个数，要替换的项数)
//位置方法 indexOf 和lastIndexOf()
let arr = [1,2,3];
console.log(arr.indexOf(1,1));//第二个参数是从哪个位置开始找起,返回-1是没有找到
// 数组的迭代方法：forEach对数组的每一项运行制定的函数，没有返回值
// map 数数组每一项运行指定的函数，返回每次函数调用的结果组成的数组
//filter 每一项运行指定的函数返回true的值组成的新数组
//every 所有项都返回true则返回true
//some 任何一项返回true则返回true
// reduce函数，递归方法
arr.reduce(function(accumulator,currentValue,currentIndex,array){},initialValue)//后面是累加默认值，可以默认是一个数组，也可以默认是一个对象
// callback函数，函数的四个参数：
    // accumulator
    // 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。

    // currentValue
    // 数组中正在处理的元素。
    // currentIndex可选
    // 数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1。
    // array可选
    // 调用reduce()的数组
// initialValue可选
// 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错
// 计算数组中每个元素出现的次数节
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// var countedNames = names.reduce(function (allNames, name) { 
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
// let mediaName = this.createDemandList.channelOption.find(val => {
// return val.value === this.channelId;
// });

function sum(a,b){
    return a+b;
}
function toUpper(str){
    return str.toUpperCase();
}
function add(str){
    return '****'+str+'****';
}
console.log(add(toUpper(sum('yeru','softEnginner'))));
// 利用reduce函数，把这个功能实现,函数的参数数组可以调用reduce
function compose(...fns) {
    return function(...args) {
        let lastFn = fns.pop();
        return fns.reduce(function(a,b){
            return b(a);
        },lastFn(...args))
    }
}
let r = compose(add,toUpper,sum)('yeru','softEnginner');
console.log(r);
//另一种写法，最新的redux的实现方法
function compose(...fns) {
    return fns.reduce(function(a,b){
        return (...args)=>{
            return a(b(...args));
        }      
    })
}
//
Array.prototype.reduce = function(callback,prev){
    for(let i=0;i<this.length;i++){
        prev = callback(this[i],this[i+1],i+1,this)
    }
}
let r = [1,2,3].reduce(function(accumulator,currentIndex,index,array){
    return a+b;
},initialValue)