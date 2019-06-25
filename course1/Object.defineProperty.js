// 数据劫持 加上get和set方法
function update(){
    console.log('更新视图');
}
let data = {
    name: 'yeru',
    age: 29,
    location: '北京石景山'
}
let methods = [push,pop,shift,unshift,slice,splice,reverse];
let oldproto = Array.prototype;//记住这个是Array.prototype
let newProto = Object.create(oldproto);
methods.forEach(method=>{
    newProto[method] = function() {
        update();
        oldproto[method].call(this,...arguments);
    }  
})
function observe(obj) {
    if(Array.isArray(obj)) {
        obj.__proto__ = oldproto;
        return;
    }
    if(typeof obj !== 'object') return obj;
    for(let key in obj) {
        observeReactive(obj,key,obj[key]);
    }
}
function observeReactive(obj, key, value){
    observe(value);
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(val){
            observe(val);
            this.value = val;
            update();
        }
    })
} 
observe(data);
// data.name = 'lgh';
// data.location= {dizhi:'peking'};
// console.log(data);
data.address = [1,2,3];
let method = ['push','slice','pop'];
method.forEach(method=>{
    let oldMethod = Array.prototype[method];
    Array.prototype[method] = function() {
        update();
        oldMethod.call(this,...arguments);
    }
})
data.address.push(4);