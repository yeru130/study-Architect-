import { createGunzip } from "zlib";

// 1）let 不会像var一样有变量提升
   console.log(book);
   // var book = 'yeru'; // undefined
   let book = 'yeru'; // book is not defined
// 2）var的块级作用域问题,能访问块级作用域里面的内容，let有块级作用域的概念
// {
//     var book = '小猪佩奇';
// }
// console.log(book); //依然可以访问book

// {
//     let book = '小猪佩奇';
// }
// console.log(book); //所以访问不了book
//作用域问题 闭包引用i问题
//  for(var i =0 ; i<10; i++){
//      setTimeout(function(){
//          console.log(i);
//      })
//  }
// for(let i =0; i< 10;i++){
//     setTimeout(function() {
//         console.log(i);
//     })
// }
//for循环是一个作用域，作用域每一次for循环都会保存一个变量i,所以可以打印出来0-9
//const 常量，不会变的量
var a = 'string';
var b = 1;
var c = null;
var d = true;
var e = {a:1};
var f = function (){console.log('123');}
console.log(typeof f);//'function'