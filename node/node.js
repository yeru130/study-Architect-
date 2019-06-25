//node是js的执行环境
//执行node的方式 1） node 文件名
//node为了模块化，所以在最外面增加了一个匿名函数，所以this在这个函数中被更改了
//浏览器中可以访问window不能访问global
//在服务器端可以访问global
// console.log(Object.keys(global));
//process 当前执行的环境
//Buffer 可以读写文件 内存中 Buffer 
//setImmediate 宏任务
//setTimeout setInterval
//默认V8方法被隐藏掉了
// console.dir(global,{showHidden:true})
//global 属性上面的东西是可以直接打印出来的
// console.log(global);
//argv 运行时传递的参数
console.log(process.argv);
let obj = process.argv.slice(2).reduce((a,b,index,arr)=>{
    if(b.includes('--')){
        a[b.slice('2')] = arr[index+1];
    }
    return a;
},{})
console.log(obj);

// env 环境变量（在当前运行的命令中 可以设置一个变量 set NODE_ENV=development 
// export NODE_ENV=development）(可以根据不同的变量调用不同的接口)
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development') {
    console.log('开发环境');
}else{
    console.log('production 生产环境');
}
// cwd 当前的工作目录 我们的node运行的地点
console.log(process.cwd());
//nextTick(微任务) 只能在node里面用
//node的事件环 每一个方法都有一个队列
//主栈 setImmediate setTimeout readFile
//微任务 promise.then nextTick
setTimeout(() => {
    console.log('time1');
    process.nextTick(()=>{
        console.log('nextTick1');
    });
}, 4);

process.nextTick(()=>{
    console.log('nextTick2');
    setTimeout(() => {
        console.log('timeOut1');
    }, 4);
})
//nextTick2 time1 nextTick1 timeOut1
//node和浏览器的执行顺序是一样的，区别只是每个阶段都有一个自己的队列
let fs = require('fs');
fs.readFile('./node.md','utf8',(err,data)=>{
    setTimeout(() => {
        console.log('呵呵想');
    }, 0);
    setImmediate(()=>{
        console.log('setImmediate');
    })
})// setImmediate  '呵呵想'//和浏览器一样，但是在readFile中有check 会先走check
//stdin stderr stdout

// commonjs 规范 内置模块 npm的应用
// node 为了实现模块化 就在文件外面 套了一个函数
// 模块化 sea.js cmd requirejs amd (前端模块)
// es6Module import export
// commonjs

// 模块的规范 (加了函数)
// 1) 一个文件就是一个模块
// 2) 每个文件都可以导出自己 module.exports
// 3) 别人想用这个模块可以引入进来 require

// 命名冲突 单例模式 （可以把自己的代码放到特定的对象里维护） 不能完美解决，而且会导致调用时代码过长
// 自执行函数 可以解决模块化的问题
let r = (function(){
    var a = 1;
    var b = 2;
    module.exports = 100;
    return module.exports
})()