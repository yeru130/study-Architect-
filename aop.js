//装饰器
Function.prototype.before = function(callback){
    let self = this;
    return function() {
        callback();
        self();
    }
}
function fn() {
    console.log('有一定的功能');
}

let newFn = fn.before(function() {
    console.log('在此之前执行本句操作');
});

newFn();