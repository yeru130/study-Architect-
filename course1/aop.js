//装饰器
Function.prototype.before = function(callback){
    let self = this;
    return function(val) {
        callback();
        self(val);  //传入多个参数，把第4行的val去掉，然后把6行改为self.apply(self,arguments);
    }
}
function fn(val) {
    console.log('有一定的功能' + val);
}

let newFn = fn.before(function() {
    console.log('在此之前执行本句操作');
});

newFn(val);

