function EventEmitter() {//{'女生失恋':[cry,talk]}
    this._event = {};
}

EventEmitter.prototype.on = function(eventName,callback) {
   if(this._event[eventName]) {
       this._event[eventName].push(callback);
   } else {
    this._event[eventName] = [callback];
   }
}

EventEmitter.prototype.emit = function(eventName) {
    if(this._event[eventName]) {
        this._event.forEach(fn => {
            fn.call(this,...arguments);
        });
    }
}
EventEmitter.prototype.off = function(eventName,callback) {
    if(this._event[eventName]) {
        this._event[eventName].filter(fn => {
            return fn != callback;
        })
    }
}
module.exports = EventEmitter;