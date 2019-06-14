//发布订阅模式
function EventEmitter() {
    this._array = [];
}
EventEmitter.prototype.on = function(callback) {
    this._array.push(callback);
}
EventEmitter.prototype.emit = function() {
    this._array.forEach(fn => fn.apply(this, arguments));//改变this关键字很重要，否则不会运行
}
let school = {};
var e = new EventEmitter();
e.on(function(data, key) {
    school[key] = data;
    if(Object.keys(school).length === 2) {
        console.log(school);
    }
})
let fs= require('fs'); // fileSystem
fs.readFile('./name.txt', 'utf8', function(err,data){
    if(err) return console.log(err);
    e.emit('name',data);
});
fs.readFile('./age.txt', 'utf8', function(err,data){
    if(err) return console.log(err);
    e.emit('age', data);
})