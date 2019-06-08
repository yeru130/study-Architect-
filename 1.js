Function.prototype.before = function(callback){
    let self = this;
    return function() {
        callback();
        self();
    }
}
function fn(){
    console.log('执行了');
}
let newFn = fn.before(function(){
    console.log('先执行这句话');
});
newFn();