// 使用proxy来实现数据的响应式变化
// 可以支持数组，而且不用区分是对象还是数组
// 兼容性 vue 3.0对所有的属性进行拦截会用proxy
function render(){
    console.log('视图更新');
}
let obj = {
    name: 'yeru',
    age: {age:100},
    arr: []
}
let handler = {
    get(target,key){
        // 如果取的值是对象的话，然后对这个对象进行数据劫持
        if(typeof target[key] == 'object' && target[key] !==null){
            return new Proxy(target[key], handler);
        }
        return Reflect.get(target,key);
    },
    set(target,key,value){
        if(key === 'length') return true;
        return Reflect.set(target,key,value);
    }
}
let proxy = new Proxy(obj,handler);
proxy.age.age = 100;
obj.arr.push(123);
console.log(proxy.arr);
