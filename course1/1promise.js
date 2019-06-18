//Promise是一个类，里面传入一个立即执行的函数，这个函数有两个参数分为为两个函数
//一开始是pending状态，变为'fulfilled',就不会再走失败态
//一开始是pending状态,变为失败态 'rejected',走了失败态就不会走成功态
let Promise = require(./promise.js);
let promise = new Promise(function(resolve,reject){
    resolve('成功了');
    reject('失败了');    
})//excutor执行器
promise.then(function(resolve){
    console.log(resolve);
},function(err){
    console.log(err);
})
