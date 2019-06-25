// noede 的 EventEmitter  node事件的发布订阅
let util = require(util);
let EventEmitter = require(event);
function cry(){
    console.log('失恋了');
}
function Girl() {
    
}
util.inherits(Girl, EventEmitter);
let girl = new Girl();
let cry = (thing) => {
    console.log('cry', thing);
}

girl.on('女生失恋', cry); //订阅
// girl.off('女生失恋', cry); 取消订阅
girl.emit('女生失恋', '不爱了');// 发布

