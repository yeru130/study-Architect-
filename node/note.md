## node中间层
-解决跨域问题（浏览器跨域），用node中间层，浏览器去请求node,node去请求后端（java）是没有跨域的
## java是一个多线程的语言
-Tomcat
## node适合并发高的 
-web端的读取文件 适合I/O密集的
不适合cpu秘籍的 运算 加密 解密
-Nginx开多进程 node  java
-生态好，前端的开发工具 webpack gulp
 
## I/O异步 阻塞和非阻塞
-多线程的 内核基于libuv库 内核V8
-V8引擎中有发放setTimeout 不能操作dom  没有bom 只有ecmascript ,支持拥有服务端的能力，内置很多模块http fs......

## 异步/同步 阻塞和非阻塞
-异步/同步指的是被调用方
-阻塞/非阻塞指的是调用方

## 宏任务和微任务
- 微任务： promise.then , MutationObserver, process.nextTick
- 宏任务： script , setTimeout , setInterval , setImmediate(ie下),
MessageChannel, I/O , UI rendering.

> 微任务 会比宏任务快，js会先执行script脚本

## node事件环 （）
- timers阶段 setTimeout, setInterval
- poll 阶段（回到 timer 阶段执行回调并且进行I/O回调） fs.readFile()
           （poll任务为空，有check阶段会进入check阶段)
- check阶段 setImmediate

setTimeout ,setImmediate 看进入事件循环的时间，是否达到需要执行的时间

I/O的下一个阶段是 check阶段

