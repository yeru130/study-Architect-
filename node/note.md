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
