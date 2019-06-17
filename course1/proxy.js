function update() {
    console.log('更新视图');
}
let arr = [1,2,3];
let proxy = new Proxy(arr, {
    get(target,key) {
        return Reflect.get(target,key);
    },
    set(target,key,value) {
        update();
        return Reflect.set(target,key,value);
    }
});
proxy[0] = 100;
proxy.push(1);
console.log(proxy);

//proxy拦截方法，vue3.0用这个方法，可以处理数组也可以处理对象，用这个方法对对象和数组监控属性的改变