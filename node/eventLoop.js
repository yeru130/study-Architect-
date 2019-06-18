//微任务宏任务，先运行宏任务，后运行微任务
//宏任务： setTimeOut
//微任务：Promise.then MutationObserver channelMessage
setTimeout(() => {
    console.log(1);
    Promise.resolve().then(()=>{
        console.log(2);
    })
}, 0);

Promise.resolve().then(function(){
    console.log(3);
    setTimeout(()=>{
        console.log(4);
    },0)
})
console.log('start');// start  3 1 2 4

let channel = new MessageChannel();
let port1 = channel.port1;
let port2 = channel.port2;
port2.postMessage('你好');
console.log(1);
port1.onmessage = function(e) {
    console.log(e.data);
}
console.log(2);//1 2 '您好'
// js是单线程的
//栈是后进先出（last-In-Firse-Out） 函数调用，队列是先进先出(First-In-First-Out)
//进程和线程的关系
// 进程是计算机分配任务和调度任务的基本单位
//js中一个进程只有一个主线程
//js线程和ui线程是互斥的，主线程中不能同时进行渲染ui和js
//如果提高浏览器或者js的加载速度
// 1)defer(异步加载js并且按照顺序执行) async（一般不用，因为不会按照顺序执行）
// 2)prefetch(路由拆分，默认不会加载，等浏览器空闲的时候默默加载) 和 preload(会先加载资源)
// preload
// 【定义】

// 　　如下所示，preload是link元素中的rel属性值

// <link rel=“preload”> 
// 　　preload 提供了一种声明式的命令，让浏览器提前加载指定资源(加载后并不执行)，需要执行时再执行

// 　　这样做的好处在于：

// 　　1、将加载和执行分离开，不阻塞渲染和document的onload事件

// 　　2、提前加载指定资源，不再出现依赖的font字体隔了一段时间才刷出的情况
// prefetch
// 　　如下所示，prefetch是link元素中的rel属性值

// <link rel=“prefetch”>
// 　　它的作用是告诉浏览器加载下一页面可能会用到的资源，注意，是下一页面，而不是当前页面。因此该方法的加载优先级非常低，也就是说该方式的作用是加速下一个页面的加载速度

// 【区分】

// 　　preload 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源

// 　　prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源

// 　　在VUE SSR生成的页面中，首页的资源均使用preload，而路由对应的资源，则使用prefetch
