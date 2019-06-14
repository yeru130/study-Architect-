// 并发调用接口 另个ajax  ajax1 => name ajax2 => age = name + age

function after(times, callback) {
    let obj = {};
    return function(key,val) {
        obj[key] = val;
        if(--times === 0) {
            callback(obj);
        }
    }
}
let newFn = after(2, function(obj){
    console.log(obj);
})
let fs= require('fs'); // fileSystem
fs.readFile('./name.txt', 'utf8', function(err,data){
    if(err) return console.log(err);
    newFn('name',data);
});
fs.readFile('./age.txt', 'utf8', function(err,data){
    if(err) return console.log(err);
    newFn('age', data);
})

// 串行 两个人有关系 上一个人的输出是下一个人的输入
// 并行 两个人没有关系 可以一起执行

// 前端面试中 发布订阅（promise） 观察者模式

