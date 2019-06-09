// Function.prototype.before = function(callback){
//     let self = this;
//     return function(){
//         callback();
//         self();
//     }
// }
// function fn(){
//     console.log('后面运行');
// }
// let newFn = fn.before(function(){
//     console.log('前面运行');
// })
// newFn();
// function after(times, callback) {
//     return function(){
//         if(--times === 0) {
//              callback();
//         }
//     }
// }
// let newFn = after(3, function(){
//     console.log('3次过后显示出来');
// })

// newFn();
// newFn();
// newFn();
after(times, function(callback){
    let obj = {};
    return function(key, data){
        obj[key] = data;
        if(--times === 0){
            callback(obj);
        }
    }
})
let newFn = after(2, function(value){
    console.log(value);
})
let fs = require('fs');
fs.readFile('./name.txt', 'utf8', function(err,data){
    if(err) return console.log(err);
    console.log(data)
    newFn('name',data);
})
fs.readFile('./age.txt', 'utf8', function(err,data){
    if(err) return console.log(err);
    console.log(data)
    newFn('age',data);
})
