// set和map是数据集合
// set 是数据集合，存放的是不能重复的元素
var a = new Set([1,2,3,2,4]);
a.add(5);//添加
a.delete(5);//删除
console.log(a.has(1,2))
console.log(a);
console.log(typeof a);//object
// 可以用来做数组去重，可以配合...使用，但别忘记...是展开的是属性值或者值，外面要加上[],或者{}
let  newA = [...a];
console.log(newA);
// 取两个数组的并集、交集、差集
let str1 = [1,2,2,3,5];
let str2 = [3,4,5,5];
//并集
// function union(val1,val2) {
//     let s1 = new Set([1,2,2,3]);
//     let s2 = new Set([3,4,5]);
//     let result = [...s1,...s2];
//     return [...new Set(result)];
// }
// var s3 = union(str1,str2);
// console.log(s3);

// 交集
function intersection(val1,val2) {
    return [...new Set(val1)].filter(function(item){
        return new Set(str2).has(item);
    })
}
var str4 = intersection(str1,str2);
console.log(str4);
//差集
// function differ(val1, val2){
//     return [...new Set(val1)].filter(function(item){
//         return !new Set(val2).has(item);
//     })    
// };
// var s5 = differ(str1,str2);
// console.log(s5);

// Map WeakMap  set是集合 map 和weakmap是映射表
let m = new Map();
m.set('name', 'yeru');
m.set('age', 29);
let obj = {name:1};
m.set(obj,'123');
obj = null;  //map的key和val是强链接清不空
console.log(m);
// map是有key的不能重复放，weakMap的key必须是对象类型的，weakMpa的key和value值是弱链接
let a = new WeakMap();
let data = {name: 'yeru'};
a.set(data,'lyw');

//深拷贝利用weakMap属性
function deepClone(obj,hash = new WeakMap()){
    if(typeof obj !== 'object') return obj;
        if(hash.has(obj)) return hash.get(obj);//相当于把obj当做key,用来去重用，如果存在直接返回值，说明已经克隆过了，如果不存在赶紧克隆一份
        let newObj = new obj.constructor;
        hash.set(obj,newObj)
        for(let key in obj){
            newObj[key] = deepClone(obj[key],hash);
        }
        return newObj;
}
var data ={name: 'yeru'};
var a = deepClone(data);
console.log(a);


