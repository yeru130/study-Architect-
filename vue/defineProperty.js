let obj = {name: 'yeru',age:29};
function update() {
    console.log('更新了');
}
function Observe(obj) {
    if(typeof obj !=='object') return obj;
    for(let key in obj) {
        defineReactive(obj,key,obj[key]);
    }
}

function defineReactive(obj,key,value) {
    Observe(value);
    Object.defineProperty(obj,key,{
        get() {
            return value;
        },
        set(newValue) {
            Observe(newValue);
            if(value !== newValue){
                value = newValue;
                update();
            }
        }
    })
}
Observe(obj);
// vue 1) 如果给对象新增一个属性 是不会被监控的 $set
// 如果想给对象增加一个不存在的属性 obj.location = {...obj.location, a:1}
function $set(data,key,value){
    if(Array.isArray(data)){
        return data.splice(key,1,value);// 当前用户调用了splice方法
    }
    defineReactive(data,key,value);
}
console.log(obj.age= {address:'北京'});